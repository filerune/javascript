import type { Format } from "ts-vista";

import type { FileChunk } from "#/@types/chunk";

type _MergeOptions = {
    /**
     * Chunks to be merged in the `merge` function.
     */
    chunks: FileChunk[];
};

/**
 * Options for the custom merge function in the `merge` function.
 */
type MergeFunctionOptions = _MergeOptions;

/**
 * Options for the `merge` function.
 */
type MergeOptions = Format<
    _MergeOptions & {
        /**
         * Custom merge function for the `merge` function.
         */
        mergeFunction?: (
            options: MergeFunctionOptions,
        ) => MergeResult | Promise<MergeResult>;
    }
>;

/**
 * Result of the `merge` function.
 */
type MergeResult = {
    /**
     * merged blob.
     */
    blob: Blob;
};

export type { _MergeOptions, MergeFunctionOptions, MergeOptions, MergeResult };
