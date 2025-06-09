import type { SplitResult } from "@filerune/fusion";

import * as fsp from "node:fs/promises";
import * as path from "node:path";

import { split } from "@filerune/fusion";

const getFile = async (): Promise<Buffer<ArrayBufferLike>> => {
    return await fsp.readFile(
        path.resolve(process.cwd(), "assets", "test.jpg"),
    );
};

const chunkSize: number = 1 * 1024 * 1024;

const preSplit = async (): Promise<SplitResult> => {
    return await split({
        file: await getFile(),
        chunkSize,
    });
};

export { getFile, chunkSize, preSplit };
