// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Account extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("address", Value.fromBytes(Bytes.empty()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Account entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save Account entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("Account", id.toString(), this);
    }
  }

  static load(id: string): Account | null {
    return changetype<Account | null>(store.get("Account", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get address(): Bytes {
    let value = this.get("address");
    return value!.toBytes();
  }

  set address(value: Bytes) {
    this.set("address", Value.fromBytes(value));
  }
}

export class Collectible extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("collection", Value.fromString(""));
    this.set("owner", Value.fromString(""));
    this.set("creator", Value.fromString(""));
    this.set("tokenId", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Collectible entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save Collectible entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("Collectible", id.toString(), this);
    }
  }

  static load(id: string): Collectible | null {
    return changetype<Collectible | null>(store.get("Collectible", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get collection(): string {
    let value = this.get("collection");
    return value!.toString();
  }

  set collection(value: string) {
    this.set("collection", Value.fromString(value));
  }

  get owner(): string {
    let value = this.get("owner");
    return value!.toString();
  }

  set owner(value: string) {
    this.set("owner", Value.fromString(value));
  }

  get creator(): string {
    let value = this.get("creator");
    return value!.toString();
  }

  set creator(value: string) {
    this.set("creator", Value.fromString(value));
  }

  get tokenId(): BigInt {
    let value = this.get("tokenId");
    return value!.toBigInt();
  }

  set tokenId(value: BigInt) {
    this.set("tokenId", Value.fromBigInt(value));
  }

  get descriptorURI(): string | null {
    let value = this.get("descriptorURI");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set descriptorURI(value: string | null) {
    if (!value) {
      this.unset("descriptorURI");
    } else {
      this.set("descriptorURI", Value.fromString(<string>value));
    }
  }

  get modified(): BigInt | null {
    let value = this.get("modified");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set modified(value: BigInt | null) {
    if (!value) {
      this.unset("modified");
    } else {
      this.set("modified", Value.fromBigInt(<BigInt>value));
    }
  }

  get created(): BigInt | null {
    let value = this.get("created");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set created(value: BigInt | null) {
    if (!value) {
      this.unset("created");
    } else {
      this.set("created", Value.fromBigInt(<BigInt>value));
    }
  }

  get removed(): BigInt | null {
    let value = this.get("removed");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set removed(value: BigInt | null) {
    if (!value) {
      this.unset("removed");
    } else {
      this.set("removed", Value.fromBigInt(<BigInt>value));
    }
  }

  get name(): string | null {
    let value = this.get("name");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set name(value: string | null) {
    if (!value) {
      this.unset("name");
    } else {
      this.set("name", Value.fromString(<string>value));
    }
  }

  get description(): string | null {
    let value = this.get("description");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set description(value: string | null) {
    if (!value) {
      this.unset("description");
    } else {
      this.set("description", Value.fromString(<string>value));
    }
  }
}

export class Collection extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("collectionName", Value.fromString(""));
    this.set("collectionSymbol", Value.fromString(""));
    this.set("collectionAddress", Value.fromBytes(Bytes.empty()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Collection entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save Collection entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("Collection", id.toString(), this);
    }
  }

  static load(id: string): Collection | null {
    return changetype<Collection | null>(store.get("Collection", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get collectionName(): string {
    let value = this.get("collectionName");
    return value!.toString();
  }

  set collectionName(value: string) {
    this.set("collectionName", Value.fromString(value));
  }

  get collectionSymbol(): string {
    let value = this.get("collectionSymbol");
    return value!.toString();
  }

  set collectionSymbol(value: string) {
    this.set("collectionSymbol", Value.fromString(value));
  }

  get collectionAddress(): Bytes {
    let value = this.get("collectionAddress");
    return value!.toBytes();
  }

  set collectionAddress(value: Bytes) {
    this.set("collectionAddress", Value.fromBytes(value));
  }
}
