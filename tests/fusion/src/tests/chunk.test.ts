import type { FileChunk } from "@filerune/fusion/chunk";

import { isTypeOfFileChunk, isTypeOfFileChunks } from "@filerune/fusion/chunk";
import { describe, expect, it } from "vitest";

const chunk: FileChunk = {
    index: 0,
    blob: new Blob(),
};

const chunks: FileChunk[] = [
    chunk,
    chunk,
    chunk,
];

describe("Chunk tests", (): void => {
    it("should be a chunk", (): void => {
        expect(isTypeOfFileChunk(chunk)).toBe(true);
    });

    it("should be a chunks", (): void => {
        expect(isTypeOfFileChunks(chunks)).toBe(true);
    });
});
