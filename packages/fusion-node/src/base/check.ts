import type { CheckResult } from "@filerune/fusion";

import type { CheckOptions } from "#/@types/check";

/**
 * This function checks file integrity.
 *
 * It will check file integrity by verifying the chunks specified
 * in the `inDir` with `fileSize`, `totalChunks` parameters.
 *
 * It will return the `status` and the `error` of the check.
 *
 * ### Example
 *
 * ```ts
 * import { check } from "@filerune/fusion-node";
 *
 * await check({
 *     inDir: "/path/to/dir",
 *     fileSize: 0, // result from split function...
 *     totalChunks: 0, // result from split function...
 * });
 * ```
 */
async function check(options: CheckOptions): Promise<CheckResult> {
    const { inDir, fileSize, totalChunks, checkFunction }: CheckOptions =
        options;

    // custom

    if (checkFunction) {
        return await checkFunction({
            inDir,
            fileSize,
            totalChunks,
        });
    }

    // default

    let fs: typeof import("node:fs");
    let fsp: typeof import("node:fs/promises");
    let path: typeof import("node:path");

    try {
        fs = await import("node:fs");
        fsp = await import("node:fs/promises");
        path = await import("node:path");
    } catch (_: unknown) {
        throw new Error("Node.js is required to use the check function");
    }

    if (!fs.existsSync(inDir)) {
        throw new Error("Input directory not found");
    }

    if (!fs.statSync(inDir).isDirectory()) {
        throw new TypeError("Input directory is not a directory");
    }

    let actualSize: number = 0;
    const missing: number[] = [];

    for (let i: number = 0; i < totalChunks; i++) {
        const filePath: string = path.join(inDir, `${i}`);

        if (fs.existsSync(filePath)) {
            actualSize += (await fsp.stat(filePath)).size;
        } else {
            missing.push(i);
        }
    }

    // missing part
    if (missing.length > 0) {
        return {
            success: false,
            error: {
                type: "missing",
                message: "missing chunk(s)",
                missing,
            },
        };
    }

    // not the same size
    if (actualSize !== fileSize) {
        return {
            success: false,
            error: {
                type: "size",
                message:
                    "the size of chunks is not equal to `fileSize` parameter",
            },
        };
    }

    // success
    return {
        success: true,
    };
}

export { check };
