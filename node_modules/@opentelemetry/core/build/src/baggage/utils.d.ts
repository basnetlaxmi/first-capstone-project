import { Baggage } from '@opentelemetry/api';
export declare const serializeKeyPairs: (keyPairs: string[]) => string;
export declare const getKeyPairs: (baggage: Baggage) => string[];
export declare const parsePairKeyValue: (entry: string) => {
    key: string;
    value: string;
    metadata: import("@opentelemetry/api").BaggageEntryMetadata | undefined;
} | undefined;
/**
 * Parse a string serialized in the baggage HTTP Format (without metadata):
 * https://github.com/w3c/baggage/blob/master/baggage/HTTP_HEADER_FORMAT.md
 */
export declare const parseKeyPairsIntoRecord: (value?: string | undefined) => Record<string, string>;
//# sourceMappingURL=utils.d.ts.map