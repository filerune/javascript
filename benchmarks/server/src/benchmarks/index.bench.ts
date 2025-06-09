import type { SplitResult } from "@filerune/fusion-node";

import * as path from "node:path";

import {
    check as checkNode,
    merge as mergeNode,
    split as splitNode,
} from "@filerune/fusion-node";
import { bench, describe } from "vitest";

import { cacheDir, chunkSize, inFile, outFile, preSplit } from "#/configs";

const SPLITTED_NODE: SplitResult = await preSplit();

describe("Split", (): void => {
    let i: number = 0;

    bench("Fusion", async (): Promise<void> => {
        await splitNode({
            inFile,
            outDir: path.join(cacheDir, i.toString()),
            chunkSize,
        });

        i++;
    });
});

describe("Check", async (): Promise<void> => {
    bench("Fusion", async (): Promise<void> => {
        await checkNode({
            inDir: path.join(cacheDir, "-1"),
            fileSize: SPLITTED_NODE.fileSize,
            totalChunks: SPLITTED_NODE.totalChunks,
        });
    });
});

describe("Merge", async (): Promise<void> => {
    bench("Fusion", async (): Promise<void> => {
        await mergeNode({
            inDir: path.join(cacheDir, "-1"),
            outFile,
        });
    });
});
