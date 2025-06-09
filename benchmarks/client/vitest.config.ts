import { defineConfig } from "vitest/config";

import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
    plugins: [tsconfigPaths()],
    optimizeDeps: {
        exclude: ["@filerune/fusion"],
    },
    test: {
        sequence: {
            concurrent: false,
        },
        maxConcurrency: 1,
    },
});
