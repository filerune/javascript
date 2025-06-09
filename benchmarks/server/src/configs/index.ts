import type { SplitResult as SplitResultNode } from "@filerune/fusion-node";

import * as path from "node:path";

import { split as splitNode } from "@filerune/fusion-node";

const chunkSize: number = 1 * 1024 * 1024;

const inFile: string = path.resolve(process.cwd(), "assets", "test.jpg");
const cacheDir: string = path.resolve(process.cwd(), ".media", "cache");
const outFile: string = path.resolve(
    process.cwd(),
    ".media",
    "output",
    "test.jpg",
);

const preSplit = async (): Promise<SplitResultNode> => {
    return await splitNode({
        inFile,
        outDir: path.join(cacheDir, "-1"),
        chunkSize,
    });
};

export { chunkSize, inFile, cacheDir, outFile, preSplit };
