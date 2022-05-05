import { Address } from "@graphprotocol/graph-ts";
import { Account } from "../generated/schema";


export const ADDRESS_ZERO = Address.fromString(
    "0x0000000000000000000000000000000000000000"
  );
  

export function getOrCreateAccount(address: Address) : Account {
    let account = Account.load(address.toHex());
    if(account == null) {
        account = new Account(address.toHex());
        account.address = address;
        account.save()
    }
    return account;
}