// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Project extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Project entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Project entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Project", id.toString(), this);
  }

  static load(id: string): Project | null {
    return store.get("Project", id) as Project | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get name(): string {
    let value = this.get("name");
    return value.toString();
  }

  set name(value: string) {
    this.set("name", Value.fromString(value));
  }

  get ownerAddress(): string {
    let value = this.get("ownerAddress");
    return value.toString();
  }

  set ownerAddress(value: string) {
    this.set("ownerAddress", Value.fromString(value));
  }

  get projectAddress(): string {
    let value = this.get("projectAddress");
    return value.toString();
  }

  set projectAddress(value: string) {
    this.set("projectAddress", Value.fromString(value));
  }

  get allBids(): Array<string> | null {
    let value = this.get("allBids");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set allBids(value: Array<string> | null) {
    if (value === null) {
      this.unset("allBids");
    } else {
      this.set("allBids", Value.fromStringArray(value as Array<string>));
    }
  }

  get originalSpeedTargets(): Array<BigInt> | null {
    let value = this.get("originalSpeedTargets");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigIntArray();
    }
  }

  set originalSpeedTargets(value: Array<BigInt> | null) {
    if (value === null) {
      this.unset("originalSpeedTargets");
    } else {
      this.set(
        "originalSpeedTargets",
        Value.fromBigIntArray(value as Array<BigInt>)
      );
    }
  }

  get originalBounties(): Array<BigInt> | null {
    let value = this.get("originalBounties");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigIntArray();
    }
  }

  set originalBounties(value: Array<BigInt> | null) {
    if (value === null) {
      this.unset("originalBounties");
    } else {
      this.set(
        "originalBounties",
        Value.fromBigIntArray(value as Array<BigInt>)
      );
    }
  }
}

export class Bids extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Bids entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Bids entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Bids", id.toString(), this);
  }

  static load(id: string): Bids | null {
    return store.get("Bids", id) as Bids | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get project(): string {
    let value = this.get("project");
    return value.toString();
  }

  set project(value: string) {
    this.set("project", Value.fromString(value));
  }

  get bidderAddress(): string {
    let value = this.get("bidderAddress");
    return value.toString();
  }

  set bidderAddress(value: string) {
    this.set("bidderAddress", Value.fromString(value));
  }

  get bidDate(): i32 {
    let value = this.get("bidDate");
    return value.toI32();
  }

  set bidDate(value: i32) {
    this.set("bidDate", Value.fromI32(value));
  }

  get speedTargetsBidder(): Array<BigInt> | null {
    let value = this.get("speedTargetsBidder");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigIntArray();
    }
  }

  set speedTargetsBidder(value: Array<BigInt> | null) {
    if (value === null) {
      this.unset("speedTargetsBidder");
    } else {
      this.set(
        "speedTargetsBidder",
        Value.fromBigIntArray(value as Array<BigInt>)
      );
    }
  }

  get bountiesBidder(): Array<BigInt> | null {
    let value = this.get("bountiesBidder");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigIntArray();
    }
  }

  set bountiesBidder(value: Array<BigInt> | null) {
    if (value === null) {
      this.unset("bountiesBidder");
    } else {
      this.set("bountiesBidder", Value.fromBigIntArray(value as Array<BigInt>));
    }
  }
}