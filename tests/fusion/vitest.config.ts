import { defineConfig } from "vitest/config";

import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
    plugins: [tsconfigPaths()],
    optimizeDeps: {
        exclude: ["@filerune/fusion"],
    },
    test: {
        environment: "happy-dom",
        testTimeout: 1000 * 60,
        logHeapUsage: true,
    },
});
