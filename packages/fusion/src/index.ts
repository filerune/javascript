export type { FileChunk } from "#/@types/chunk";

export type {
    SplitFunctionOptions,
    SplitOptions,
    SplitResult,
} from "#/@types/base/split";

export type {
    CheckFunctionOptions,
    CheckOptions,
    CheckResultError,
    CheckResult,
} from "#/@types/base/check";

export type {
    MergeFunctionOptions,
    MergeOptions,
    MergeResult,
} from "#/@types/base/merge";

export {
    isTypeOfFileChunks,
    isTypeOfFileChunk,
} from "#/functions/chunk";

export { split } from "#/base/split";

export { check } from "#/base/check";

export { merge } from "#/base/merge";
