import { HexString, isEmpty } from "@fleet-sdk/common";
import { hexToBytes } from "@noble/hashes/utils";
import { vlqDecode, vlqDecodeBigInt } from "../vlq";
import { zigZagDecode, zigZagDecodeBigInt } from "../zigZag";
import { SigmaTypeCode } from "./sigmaTypeCode";

export class SigmaByteReader {
  private _bytes!: Uint8Array;
  private _cursor!: number;

  public get isEmpty(): boolean {
    return isEmpty(this._bytes);
  }

  constructor(bytes: HexString | Uint8Array) {
    if (typeof bytes === "string") {
      this._bytes = hexToBytes(bytes);
    } else {
      this._bytes = bytes;
    }

    this._cursor = 0;
  }

  public readBoolean(): boolean {
    return this.readByte() === 0x01;
  }

  public readBits(length: number): ArrayLike<boolean> {
    const bits = new Array<boolean>(length);
    let bitOffset = 0;

    for (let i = 0; i < length; i++) {
      const bit = (this._bytes[this._cursor] >> bitOffset++) & 1;
      bits[i] = bit === 1;

      if (bitOffset == 8) {
        bitOffset = 0;
        this._cursor++;
      }
    }

    if (bitOffset > 0) {
      this._cursor++;
    }

    return bits;
  }

  public readByte(): number {
    return this._bytes[this._cursor++];
  }

  public readBytes(length: number): Uint8Array {
    return this._bytes.subarray(this._cursor, (this._cursor += length));
  }

  public readType(): SigmaTypeCode {
    return this.readByte();
  }

  public readVlq(): number {
    return vlqDecode(this);
  }

  public readShort(): number {
    return Number(zigZagDecode(vlqDecode(this)));
  }

  public readInt(): number {
    const int = this.readLong();

    return Number(int);
  }

  public readLong(): bigint {
    return zigZagDecodeBigInt(vlqDecodeBigInt(this));
  }
}
