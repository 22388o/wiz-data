export declare class WizData {
    input: string | number | Uint8Array;
    bytes: Uint8Array;
    bin: string;
    hex: string;
    number?: number;
    text?: string;
    label?: string;
    private constructor();
    static fromHex(hex: string): WizData;
    static fromBin(bin: string): WizData;
    static fromNumber(number: number): WizData;
    static fromText(text: string): WizData;
    static fromBytes(bytes: Uint8Array): WizData;
}
