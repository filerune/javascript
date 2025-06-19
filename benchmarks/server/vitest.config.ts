import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vitest/config";

export default defineConfig({
    plugins: [
        tsconfigPaths(),
    ],
    optimizeDeps: {
        exclude: [
            "@filerune/fusion",
            "@filerune/fusion-node",
        ],
    },
    test: {
        sequence: {
            concurrent: false,
        },
        maxConcurrency: 1,
    },
});
