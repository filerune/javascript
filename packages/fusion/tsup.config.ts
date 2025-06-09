import type { Options } from "tsup";

import { defineConfig } from "tsup";

const options: Options = {
    entry: {
        index: "./src/index.ts",
        internal: "./src/internal.ts",
    },
    sourcemap: true,
    outDir: "./dist",
    platform: "neutral",
    tsconfig: "./tsconfig.json",
};

export default defineConfig([
    {
        ...options,
        format: "esm",
    },
    {
        ...options,
        format: "cjs",
        dts: true,
    },
]);
