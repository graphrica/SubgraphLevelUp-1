import { Address, ethereum, BigInt } from "@graphprotocol/graph-ts";
import { newMockEvent } from "matchstick-as";
import { Transfer } from "../generated/ERC721/ERC721";
import { Collection } from "../generated/schema";

export const ADDRESS_ZERO = Address.fromString("0x0000000000000000000000000000000000000000");
export const colllectionAddress1 = Address.fromString("0xba5bde662c17e2adff1075610382b9b691296350");

export function createCollection() : void {
    let collection = new Collection(colllectionAddress1.toHex())
    collection.collectionAddress = colllectionAddress1;
    collection.collectionName = "SUPER";
    collection.collectionSymbol = "SPR";
    collection.save();
}

export function createNewMockTransferEvent(from: Address, to: Address, tokenId: BigInt) : Transfer {
    let mockEvent = newMockEvent();
    let fromParam = new ethereum.EventParam("from", ethereum.Value.fromAddress(from));
    let toParam = new ethereum.EventParam("to", ethereum.Value.fromAddress(to));
    let tokenIdParam = new ethereum.EventParam("tokenId", ethereum.Value.fromSignedBigInt(tokenId));

    let mockTransferEvent = new Transfer(
        colllectionAddress1,
        mockEvent.logIndex,
        mockEvent.transactionLogIndex,
        mockEvent.logType,
        mockEvent.block,
        mockEvent.transaction,
        [fromParam, toParam, tokenIdParam]
    );
    return mockTransferEvent;
}
