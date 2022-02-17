export declare class WizData {
    input: string | number | Uint8Array;
    bytes: Uint8Array;
    bin: string;
    hex: string;
    number?: number;
    text?: string;
    label?: string;
    isWitnessElement?: boolean;
    private constructor();
    static fromHex(hex: string, isWitnessElement?: boolean): WizData;
    static fromBin(bin: string, isWitnessElement?: boolean): WizData;
    static fromNumber(number: number, isWitnessElement?: boolean): WizData;
    static fromText(text: string, isWitnessElement?: boolean): WizData;
    static fromBytes(bytes: Uint8Array, isWitnessElement?: boolean): WizData;
}
