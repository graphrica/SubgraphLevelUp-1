import { BigInt, log } from "@graphprotocol/graph-ts"
import {
  ERC721,
  Transfer
} from "../generated/ERC721/ERC721"
import { Account, Collectible, Collection} from "../generated/schema";
import { ADDRESS_ZERO, getOrCreateAccount } from "./utils";


export function handleTransfer(event: Transfer): void {
    let from = getOrCreateAccount(event.params.from);
    let to = getOrCreateAccount(event.params.to);
    let collection = Collection.load(event.address.toHex())
    let collectibleId = event.address.toHex() + "-" + event.params.tokenId.toHex();

    if (event.params.from.toHexString() == ADDRESS_ZERO.toHexString()){
      // THIS IS A MINT EVENT
      let collectible = new Collectible(collectibleId);
      collectible.collection = event.address.toHex();
      collectible.tokenId = event.params.tokenId;
      collectible.owner = to.id;
      collectible.creator = to.id;
      collectible.created = event.block.timestamp;

      let erc721Contract = ERC721.bind(event.address);
      let descriptorUri = erc721Contract.try_tokenURI(event.params.tokenId);
      if(!descriptorUri.reverted)
      {
        collectible.descriptorURI = descriptorUri.value;
      }else{
        collectible.descriptorURI = "";
      }
      collectible.save()
      log.info("MINT EVENT - TOKENID {}, TxHash {}", [collectibleId, event.transaction.hash.toHexString()])
    }
    else {
      let collectible = Collectible.load(collectibleId);

      if (collectible != null) {
        collectible.modified = event.block.timestamp;
        if(event.params.to.toHexString() === ADDRESS_ZERO.toHexString()) {
          collectible.removed = event.block.timestamp;
          log.info("BURN EVENT - TOKENID {}, TxHash {}", [collectibleId, event.transaction.hash.toHexString()])
        } else {
          collectible.owner = to.id;
          log.info("TRANSFER EVENT - TOKENID {}, TxHash {}", [collectibleId, event.transaction.hash.toHexString()])
        }
        collectible.save()
      }
    }
}
