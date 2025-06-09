import type { SplitOptions, SplitResult } from "#/@types/base/split";
import type { FileChunk } from "#/@types/chunk";

const ermsg: string =
    "file is not a File, Blob, file URI, Uint8Array or Base64 data";

/**
 * This function splits file into chunks,
 * and the chunks can be used to check and merge later.
 *
 * It will return the `chunks`, `fileSize` and `totalChunks`.
 *
 * ### Example
 *
 * ```ts
 * import { split } from "@filerune/fusion";
 *
 * const file: File | Blob | Uint8Array | string = "";
 *
 * await split({
 *     file,
 *     chunkSize: 2 * 1024 * 1024,
 * });
 * ```
 */
const split = async (options: SplitOptions): Promise<SplitResult> => {
    const { file, chunkSize, splitFunction }: SplitOptions = options;

    // custom split function

    if (splitFunction) return await splitFunction({ file, chunkSize });

    let blob: Blob;

    // string
    if (typeof file === "string") {
        // base64
        if (file.startsWith("data:")) {
            const data: string = atob(file.slice(file.indexOf(",") + 1));

            const len: number = data.length;

            const bytes: Uint8Array<ArrayBuffer> = new Uint8Array(len);

            for (let i: number = 0; i < len; i++) {
                bytes[i] = data.charCodeAt(i);
            }

            blob = new Blob([bytes]);
        } else {
            throw new TypeError(ermsg);
        }
    }
    // uint8array
    else if (file instanceof Uint8Array) {
        blob = new Blob([file]);
    }
    // file / blob
    else if (file instanceof Blob) {
        blob = file;
    }
    // unknown
    else {
        throw new TypeError(ermsg);
    }

    const fileSize: number = blob.size;
    const total: number = Math.ceil(fileSize / chunkSize);
    const chunks: FileChunk[] = new Array(total);

    for (let index: number = 0; index < total; index++) {
        const offset: number = index * chunkSize;
        chunks[index] = {
            index,
            blob: blob.slice(offset, Math.min(offset + chunkSize, fileSize)),
        };
    }

    return {
        chunks,
        fileSize,
        totalChunks: total,
    };
};

export { split };
