import { Address, ethereum, BigInt } from "@graphprotocol/graph-ts";
import { clearStore, test, assert, describe, beforeEach, newMockEvent } from "matchstick-as/assembly/index";
import { Collection } from "../generated/schema";
import { createCollection, createNewMockTransferEvent } from "./helper";
import {
    Transfer
  } from "../generated/ERC721/ERC721"

describe("ERC721 Tests", () => {
    beforeEach(() => {
        createCollection();
    })
    test("Transfer - Mint", () => {
        let from = Address.fromString("0x28c6c06298d514db089934071355e5743bf21d60");
        let to = Address.fromString("0x0dda28d190b17ba5a8774064de4386347b33220e");
        let tokenId = BigInt.fromString("1");
        let mockTransferEvent = createNewMockTransferEvent(from, to, tokenId);
    })
})

