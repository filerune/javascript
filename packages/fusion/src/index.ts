export type {
    CheckFunctionOptions,
    CheckOptions,
    CheckResult,
    CheckResultError,
} from "#/@types/base/check";
export type {
    MergeFunctionOptions,
    MergeOptions,
    MergeResult,
} from "#/@types/base/merge";
export type {
    SplitFunctionOptions,
    SplitOptions,
    SplitResult,
} from "#/@types/base/split";
export type { FileChunk } from "#/@types/chunk";

export { check } from "#/base/check";
export { merge } from "#/base/merge";
export { split } from "#/base/split";
export {
    isTypeOfFileChunk,
    isTypeOfFileChunks,
} from "#/functions/chunk";
