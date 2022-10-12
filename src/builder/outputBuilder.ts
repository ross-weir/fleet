import { InvalidRegistersPacking } from "../errors/invalidRegistersPacking";
import { UndefinedCreationHeight } from "../errors/undefinedCreationHeight";
import { UndefinedMintingContext } from "../errors/undefinedMintingContext";
import { ErgoAddress } from "../models";
import { AddTokenOptions, TokensCollection } from "../models/collections/tokensCollection";
import { ByteColl } from "../serialization/sigma/byteColl";
import {
  Amount,
  Base58String,
  Box,
  BoxCandidate,
  ErgoTree,
  NewToken,
  NonMandatoryRegisters,
  TokenAmount,
  UnsignedInput
} from "../types";
import { first, isEmpty } from "../utils/arrayUtils";
import { toBigInt } from "../utils/bigIntUtils";
import { areRegistersDenselyPacked } from "../utils/boxUtils";
import { isUndefined, removeUndefined } from "../utils/objectUtils";
import { isHex } from "../utils/stringUtils";

export const SAFE_MIN_BOX_VALUE = 1000000n;

export class OutputBuilder {
  private readonly _value: bigint;
  private readonly _address: ErgoAddress;
  private readonly _tokens: TokensCollection;
  private _creationHeight?: number;
  private _registers: NonMandatoryRegisters;
  private _minting?: NewToken<bigint>;

  constructor(
    value: Amount,
    recipient: Base58String | ErgoTree | ErgoAddress,
    creationHeight?: number
  ) {
    this._value = toBigInt(value);
    this._creationHeight = creationHeight;
    this._tokens = new TokensCollection();
    this._registers = {};

    if (typeof recipient === "string") {
      this._address = isHex(recipient)
        ? ErgoAddress.fromErgoTree(recipient)
        : ErgoAddress.fromBase58(recipient);
    } else {
      this._address = recipient;
    }
  }

  public get value(): bigint {
    return this._value;
  }

  public get address(): ErgoAddress {
    return this._address;
  }

  public get ergoTree(): ErgoTree {
    return this._address.ergoTree;
  }

  public get creationHeight(): number | undefined {
    return this._creationHeight;
  }

  public get tokens(): TokensCollection {
    return this._tokens;
  }

  public get additionalRegisters(): NonMandatoryRegisters {
    return this._registers;
  }

  public get minting(): NewToken<bigint> | undefined {
    return this._minting;
  }

  public addTokens(
    tokens: TokenAmount<Amount>[] | TokenAmount<Amount> | TokensCollection,
    options?: AddTokenOptions
  ) {
    if (tokens instanceof TokensCollection) {
      this._tokens.add(tokens.toArray(), options);
    } else {
      this._tokens.add(tokens, options);
    }

    return this;
  }

  public mintToken(token: NewToken<Amount>): OutputBuilder {
    this._minting = { ...token, amount: toBigInt(token.amount) };

    return this;
  }

  public setCreationHeight(height: number, options?: { replace: boolean }): OutputBuilder {
    if (
      isUndefined(options) ||
      options.replace === true ||
      (options.replace === false && isUndefined(this._creationHeight))
    ) {
      this._creationHeight = height;
    }

    return this;
  }

  public setAdditionalRegisters(registers: NonMandatoryRegisters): OutputBuilder {
    this._registers = removeUndefined(registers);

    if (!areRegistersDenselyPacked(registers)) {
      throw new InvalidRegistersPacking();
    }

    return this;
  }

  public eject(ejector: (context: { tokens: TokensCollection }) => void) {
    ejector({ tokens: this._tokens });
  }

  public build(transactionInputs?: UnsignedInput[] | Box<Amount>[]): BoxCandidate<string> {
    let tokens = this.tokens.toArray();

    if (this.minting) {
      if (isEmpty(transactionInputs)) {
        throw new UndefinedMintingContext();
      }

      if (isEmpty(this.additionalRegisters)) {
        this.setAdditionalRegisters({
          R4: new ByteColl(Buffer.from(this.minting.name || "", "utf-8")).toString(),
          R5: new ByteColl(Buffer.from(this.minting.description || "", "utf-8")).toString(),
          R6: new ByteColl(
            Buffer.from(this.minting.decimals?.toString() || "0", "utf-8")
          ).toString()
        });
      }

      tokens = [
        {
          tokenId: first<UnsignedInput | Box<Amount>>(transactionInputs).boxId,
          amount: this.minting.amount
        },
        ...tokens
      ];
    }

    if (isUndefined(this.creationHeight)) {
      throw new UndefinedCreationHeight();
    }

    return {
      value: this.value.toString(),
      ergoTree: this.ergoTree,
      creationHeight: this.creationHeight,
      assets: tokens.map((token) => {
        return {
          tokenId: token.tokenId,
          amount: token.amount.toString()
        };
      }),
      additionalRegisters: this.additionalRegisters
    };
  }
}
