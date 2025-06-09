import type { SplitBaseOptions } from "@filerune/fusion/internal";
import type { Format } from "ts-vista";

type _SplitOptions = {
    /**
     * Input file to be splitted in the `split` function.
     */
    inFile: string;
    /**
     * Output directory after splitted in the `split` function.
     */
    outDir: string;
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

export type { SplitFunctionOptions, SplitOptions, SplitResult };
