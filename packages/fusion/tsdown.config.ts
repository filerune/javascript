import type { UserConfig } from "tsdown";

import { defineConfig } from "tsdown";

const options: UserConfig = {
    entry: {
        // public
        index: "./src/index.ts",
        chunk: "./src/chunk.ts",
        // internal
        "@types/base/split": "./src/@types/base/split.ts",
        "@types/base/check": "./src/@types/base/check.ts",
        "@types/base/merge": "./src/@types/base/merge.ts",
    },
    dts: false,
    outDir: "./dist",
    clean: true,
    platform: "browser",
    treeshake: true,
    sourcemap: true,
    minify: false,
    shims: true,
    unbundle: true,
    inputOptions: {
        experimental: {
            attachDebugInfo: "none",
        },
    },
};

export default defineConfig([
    {
        ...options,
        format: "esm",
    },
    {
        ...options,
        dts: true,
        format: "cjs",
    },
]);
