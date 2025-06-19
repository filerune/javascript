import * as path from "node:path";

import { fdir } from "fdir";

// base

const inRoot: string = path.resolve(process.cwd(), "assets");
const cacheRoot: string = path.resolve(process.cwd(), ".media", "cache");
const outRoot: string = path.resolve(process.cwd(), ".media", "output");

// test

const inFiles: string[] = new fdir()
    .withFullPaths()
    .exclude((n: string): boolean => n.startsWith("."))
    .crawl(inRoot)
    .sync();

// config

const chunkSize: number = 1 * 1024 * 1024;

export { inRoot, cacheRoot, outRoot, inFiles, chunkSize };
