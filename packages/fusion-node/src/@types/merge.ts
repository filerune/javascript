import type { Format } from "ts-vista";

type _MergeOptions = {
    /**
     * Input directory to be merged in the `merge` function.
     */
    inDir: string;
    /**
     * Output file after merging in the `merge` function.
     */
    outFile: string;
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
        ) => boolean | Promise<boolean>;
    }
>;

export type { MergeFunctionOptions, MergeOptions };
