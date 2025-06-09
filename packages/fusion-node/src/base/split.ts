import type { ReadStream } from "node:fs";

import type { SplitOptions, SplitResult } from "#/@types/split";

/**
 * This function splits file from a path to a directory directly.
 *
 * It will only return the `fileSize` and the `totalChunks` of the file.
 *
 * ### Example
 *
 * ```ts
 * import { split } from "@filerune/fusion-node";
 *
 * await split({
 *     inFile: "/path/to/file.txt",
 *     outDir: "/path/to/dir",
 *     chunkSize: 2 * 1024 * 1024,
 * });
 * ```
 */
const split = async (options: SplitOptions): Promise<SplitResult> => {
    const { inFile, outDir, splitFunction, chunkSize } = options;

    // custom

    if (splitFunction)
        return await splitFunction({ inFile, outDir, chunkSize });

    // default

    let fs: typeof import("node:fs");
    let fsp: typeof import("node:fs/promises");
    let path: typeof import("node:path");

    try {
        fs = await import("node:fs");
        fsp = await import("node:fs/promises");
        path = await import("node:path");
    } catch (e: unknown) {
        throw new Error("Node.js is required to use the split function");
    }

    if (!fs.existsSync(inFile)) {
        throw new Error("Input path not found");
    }

    if (!fs.statSync(inFile).isFile()) {
        throw new TypeError("Input path is not a file");
    }

    if (fs.existsSync(outDir)) {
        await fsp.rm(outDir, { recursive: true });
    }

    await fsp.mkdir(outDir, { recursive: true });

    let fileSize: number = 0;
    let index: number = 0;

    await new Promise((resolve, reject): void => {
        const readStream: ReadStream = fs.createReadStream(inFile);

        let current: Buffer = Buffer.alloc(0);

        readStream.on("error", reject);

        readStream.on(
            "data",
            (data: string | Buffer<ArrayBufferLike>): void => {
                // previous + current buffers
                current = Buffer.concat([current, Buffer.from(data)]);

                while (current.length >= chunkSize) {
                    const _current: Buffer = current.subarray(0, chunkSize);

                    fs.writeFileSync(path.join(outDir, `${index}`), _current);

                    fileSize += _current.length;

                    index++;

                    // save exceeded buffers
                    current = current.subarray(chunkSize);
                }
            },
        );

        readStream.on("end", (): void => {
            // write exceeded buffers
            if (current.length > 0) {
                const _current: Buffer = Buffer.from(current);

                fs.writeFileSync(path.join(outDir, `${index}`), _current);

                fileSize += _current.length;

                index++;
            }
        });

        readStream.on("close", () => resolve(void 0));
    });

    return { fileSize, totalChunks: index };
};

export { split };
