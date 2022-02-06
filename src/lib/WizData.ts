import { MAX_INTEGER } from "./const";
import { binToBytes } from "./bin";
import { bytesToBin, bytesToHex, bytesToNumber } from "./bytes";
import { hexToBytes } from "./hex";
import { numberToBytes } from "./number";
import { stringToBytes } from "./string";

export class WizData {
  input: string | number | Uint8Array;

  bytes: Uint8Array;
  bin: string;
  hex: string;

  number?: number;
  text?: string;

  label?: string;

  private constructor(hex?: string, bin?: string, number?: number, text?: string, bytes?: Uint8Array) {
    let inputVal: string | number | Uint8Array = "";
    let bytesVal: Uint8Array = new Uint8Array([]);
    let binVal: string = "";
    let hexVal: string = "";

    let numberVal: number | undefined = undefined;
    let textVal: string | undefined = undefined;

    // fromHex
    if (hex !== undefined) {
      inputVal = "0x" + hex;
      bytesVal = hexToBytes(hex);
      binVal = bytesToBin(bytesVal);
      hexVal = hex;
      numberVal = bytesToNumber(bytesVal);
      // textVal = bytesToString(bytesVal); // TODO get from stack cache
    }

    // fromBin
    else if (bin !== undefined) {
      inputVal = "0b" + bin;
      bytesVal = binToBytes(bin);
      binVal = bin;
      hexVal = bytesToHex(bytesVal);
      numberVal = bytesToNumber(bytesVal);
      // textVal = bytesToString(bytesVal); // TODO get from stack cache
    }

    // fromNumber
    else if (number !== undefined) {
      inputVal = number;
      bytesVal = numberToBytes(number);
      binVal = bytesToBin(bytesVal);
      hexVal = bytesToHex(bytesVal);
      numberVal = number;
      // textVal = bytesToString(bytesVal); // TODO get from stack cache
    }

    // fromText
    else if (text !== undefined) {
      inputVal = text;
      bytesVal = stringToBytes(text);
      binVal = bytesToBin(bytesVal);
      hexVal = bytesToHex(bytesVal);
      numberVal = bytesToNumber(bytesVal);
      textVal = text;
    }

    // fromBytes
    else if (bytes !== undefined) {
      inputVal = bytes;
      bytesVal = bytes;
      binVal = bytesToBin(bytesVal);
      hexVal = bytesToHex(bytes);
      numberVal = bytesToNumber(bytesVal);
      // textVal = bytesToString(bytesVal); // TODO get from stack cache
    }

    // set props
    this.input = inputVal;
    this.bytes = bytesVal;
    this.bin = binVal;
    this.hex = hexVal;
    if (numberVal !== undefined && -MAX_INTEGER <= numberVal && numberVal <= MAX_INTEGER) this.number = numberVal;
    this.text = textVal;
  }

  public static fromHex(hex: string): WizData {
    return new WizData(hex, undefined, undefined, undefined);
  }

  public static fromBin(bin: string): WizData {
    return new WizData(undefined, bin, undefined, undefined);
  }

  public static fromNumber(number: number): WizData {
    return new WizData(undefined, undefined, number, undefined);
  }

  public static fromText(text: string): WizData {
    return new WizData(undefined, undefined, undefined, text);
  }

  public static fromBytes(bytes: Uint8Array): WizData {
    return new WizData(undefined, undefined, undefined, undefined, bytes);
  }
}
