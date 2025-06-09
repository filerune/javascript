import * as path from "node:path";

import { fdir } from "fdir";

// base

const inRoot: string = path.resolve(process.cwd(), "assets");

// test

const inFiles: string[] = new fdir()
    .withFullPaths()
    .exclude((n: string): boolean => n.startsWith("."))
    .crawl(inRoot)
    .sync();

// config

const chunkSize: number = 1 * 1024 * 1024;

export { inRoot, inFiles, chunkSize };
