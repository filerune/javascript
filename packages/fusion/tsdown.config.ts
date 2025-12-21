import { defineConfig } from "@apst/tsdown";
import { cjsPreset, dtsPreset, esmPreset } from "@apst/tsdown/presets";

export default defineConfig(
    {
        entry: {
            // public
            index: "./src/index.ts",
            chunk: "./src/chunk.ts",
            // internal
            "@types/base/split": "./src/@types/base/split.ts",
            "@types/base/check": "./src/@types/base/check.ts",
            "@types/base/merge": "./src/@types/base/merge.ts",
        },
        platform: "browser",
    },
    [
        esmPreset(),
        cjsPreset(),
        dtsPreset({
            presetOptions: {
                performanceMode: true,
            },
        }),
    ],
);
