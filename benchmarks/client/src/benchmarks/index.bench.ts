import type { SplitResult } from "@filerune/fusion";

import { check, merge, split } from "@filerune/fusion";
import { bench, describe } from "vitest";

import { chunkSize, getFile, preSplit } from "#/configs";

const SPLITTED: SplitResult = await preSplit();

describe("Split", async (): Promise<void> => {
    const file: Buffer<ArrayBufferLike> = await getFile();

    bench("Fusion", async (): Promise<void> => {
        await split({
            file,
            chunkSize,
        });
    });
});

describe("Check", async (): Promise<void> => {
    bench("Fusion", async (): Promise<void> => {
        await check({
            chunks: SPLITTED.chunks,
            fileSize: SPLITTED.fileSize,
            totalChunks: SPLITTED.totalChunks,
        });
    });
});

describe("Merge", async (): Promise<void> => {
    bench("Fusion", async (): Promise<void> => {
        await merge({
            chunks: SPLITTED.chunks,
        });
    });
});
