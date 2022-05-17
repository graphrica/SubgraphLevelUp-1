import { Address, BigInt } from "@graphprotocol/graph-ts";
import { test, describe, beforeEach, assert } from "matchstick-as/assembly/index";
import { ADDRESS_ZERO, colllectionAddress1, createCollection, createNewMockTransferEvent } from "./helper";
import {handleTransfer} from "../src/mapping"

describe("ERC721 Tests", () => {
    beforeEach(() => {
        createCollection();
    })
    test("Transfer - Mint", () => {
        // Arrange
        let from = ADDRESS_ZERO;
        let to = Address.fromString("0x0dda28d190b17ba5a8774064de4386347b33220e");
        let tokenId = BigInt.fromString("1");
        let mockTransferEvent = createNewMockTransferEvent(from, to, tokenId);

        assert.entityCount("Collection", 1);

        // Act
        handleTransfer(mockTransferEvent);

        let expectedCollectibleId = colllectionAddress1.toHex() + "-" + tokenId.toHex();

        // Assert
        assert.entityCount("Account", 2);
        assert.fieldEquals("Collectible", expectedCollectibleId, "owner", to.toHexString());
        assert.fieldEquals("Collectible", expectedCollectibleId, "creator", to.toHexString());
    })
})

