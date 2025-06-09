import type { Format } from "ts-vista";

import type { FileChunk } from "#/@types/chunk";

type SplitBaseOptions = {
    /**
     * The size of each chunk in byte.
     */
    chunkSize: number;
};

type _SplitOptions = {
    /**
     * file to split, which accepts:
     * - File / Blob
     * - Uint8Array data
     * - Base64 data prefixed with "data:"
     */
    file: File | Blob | Uint8Array | string;
} & SplitBaseOptions;

/**
 * Options for the custom split function in the `split` function.
 */
type SplitFunctionOptions = Format<_SplitOptions>;

/**
 * Result of the `split` function.
 */
type SplitResult = {
    /**
     * The chunks splitted from the original file.
     */
    chunks: FileChunk[];
    /**
     * Size of the original file.
     */
    fileSize: number;
    /**
     * The total number of chunks splitted from the original file.
     */
    totalChunks: number;
};

/**
 * Options for the `split` function.
 */
type SplitOptions = Format<
    _SplitOptions & {
        splitFunction?: (
            options: SplitFunctionOptions,
        ) => SplitResult | Promise<SplitResult>;
    }
>;

export type {
    SplitBaseOptions,
    _SplitOptions,
    SplitFunctionOptions,
    SplitOptions,
    SplitResult,
};
