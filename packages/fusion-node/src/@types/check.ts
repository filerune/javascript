import type { CheckResult } from "@filerune/fusion";
import type { CheckBaseOptions } from "@filerune/fusion/internal";
import type { Format } from "ts-vista";

type _CheckOptions = {
    /**
     * Input directory to be checked in the `check` function.
     */
    inDir: string;
} & CheckBaseOptions;

/**
 * Options for the custom split function in the `split` function.
 */
type CheckFunctionOptions = Format<_CheckOptions>;

/**
 * Options for the `check` function.
 */
type CheckOptions = Format<
    _CheckOptions & {
        /**
         * Custom check function for the `check` function.
         */
        checkFunction?: (
            options: CheckFunctionOptions,
        ) => CheckResult | Promise<CheckResult>;
    }
>;

export type { CheckFunctionOptions, CheckOptions };
