import type { FileChunk } from "#/@types/chunk";

/**
 * This function checks whether the `chunks` parameter is an Array of Chunk.
 *
 * ### Example
 *
 * ```ts
 * import type { FileChunk } from "@filerune/fusion";
 *
 * import { isTypeOfFileChunks } from "@filerune/fusion";
 *
 * const chunks: FileChunk[] = []; // file chunks...
 * const result: boolean = isTypeOfFileChunks(chunks);
 * ```
 */
const isTypeOfFileChunks = (chunks: FileChunk[]): boolean => {
    if (Array.isArray(chunks) === false) {
        return false;
    }

    if (
        chunks.length > 0 &&
        (typeof chunks[0] !== "object" ||
            typeof chunks[0].index !== "number" ||
            typeof chunks[0].blob !== "object")
    ) {
        return false;
    }

    return true;
};

/**
 * This function checks whether the `chunk` object is a Chunk.
 *
 * ### Example
 *
 * ```ts
 * import type { FileChunk } from "@filerune/fusion";
 *
 * import { isTypeOfFileChunk } from "@filerune/fusion";
 *
 * const chunk: FileChunk = {
 *     // ...
 * };
 * const result: boolean = isTypeOfFileChunks(chunks);
 * ```
 */
const isTypeOfFileChunk = (chunk: FileChunk): boolean => {
    return isTypeOfFileChunks([
        chunk,
    ]);
};

/**
 * This function sorts the `chunks` parameter by the `index` property.
 *
 * ### Example
 *
 * ```ts
 * import type { Chunk } from "@filerune/fusion";
 *
 * import { sortFileChunks } from "@filerune/fusion";
 *
 * const chunks: FileChunk[] = []; // file chunks...
 * const sorted: FileChunk[] = sortFileChunks(chunks);
 * ```
 */
const sortFileChunks = (array: FileChunk[]): FileChunk[] => {
    return array.sort((a: FileChunk, b: FileChunk): number =>
        a?.index && b?.index ? a.index - b.index : 0,
    );
};

export { isTypeOfFileChunks, isTypeOfFileChunk, sortFileChunks };
