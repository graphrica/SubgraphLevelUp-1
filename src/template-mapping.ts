import {
    ERC721,
    Transfer
  } from "../generated/ERC721/ERC721"
import {Erc721} from "../generated/templates"
import {Collection} from "../generated/schema";

export function handleTransfer(event: Transfer): void {
    let collectionAddress = event.address.toHex();
    let collectionEntity = Collection.load(collectionAddress);
    if (collectionEntity == null) {
        collectionEntity = new Collection(collectionAddress);
        collectionEntity.collectionAddress = event.address;

        let erc721Contract = ERC721.bind(event.address);
        let name = erc721Contract.try_name();
        if(!name.reverted){
            collectionEntity.collectionName = name.value;
        }

        let symbol = erc721Contract.try_symbol();
        if(!symbol.reverted){
            collectionEntity.collectionSymbol = symbol.value;
        }
        collectionEntity.save();
        
        Erc721.create(event.address);
    }
  
}