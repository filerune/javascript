import type {
    CheckResult,
    FileChunk,
    MergeResult,
    SplitResult,
} from "@filerune/fusion";

import * as fsp from "node:fs/promises";

import { check, merge, split } from "@filerune/fusion";
import { describe, expect, it } from "vitest";

import { chunkSize, inFiles } from "#/configs";
import { blobToBase64 } from "#/functions/blob2base64";

describe("tests for split, check and merge", (): void => {
    for (let i: number = 0; i < inFiles.length; i++) {
        const inFile: string = inFiles[i] as string;
        const file: string = inFile.split("/").pop() ?? "";
        const fileName: string = file.split(".")[0] as string;

        let fileSize: number = 0;
        let totalChunks: number = 0;
        let chunks: FileChunk[] = [];

        it("should be able to split base64 data", async (): Promise<void> => {
            const fileData: string = await blobToBase64(
                new Blob([
                    await fsp.readFile(inFile),
                ]),
            );

            const result: SplitResult = await split({
                file: fileData,
                chunkSize,
            });

            expect(true).toBe(typeof result.fileSize === "number");
            expect(true).toBe(typeof result.totalChunks === "number");
        });

        it("should be able to split Uint8Array", async (): Promise<void> => {
            const fileData: Uint8Array = new Uint8Array(
                await fsp.readFile(inFile),
            );

            const result: SplitResult = await split({
                file: fileData,
                chunkSize,
            });

            expect(true).toBe(typeof result.fileSize === "number");
            expect(true).toBe(typeof result.totalChunks === "number");
        });

        it("should be able to split File", async (): Promise<void> => {
            const fileData: File = new File(
                [
                    await fsp.readFile(inFile),
                ],
                fileName,
            );

            const result: SplitResult = await split({
                file: fileData,
                chunkSize,
            });

            expect(true).toBe(typeof result.fileSize === "number");
            expect(true).toBe(typeof result.totalChunks === "number");

            fileSize = result.fileSize;
            totalChunks = result.totalChunks;
            chunks = result.chunks;
        });

        it("should not pass the check with error: missing ", async (): Promise<void> => {
            const result: CheckResult = await check({
                fileSize,
                totalChunks: totalChunks + 1,
                chunks,
            });

            expect(result.success).toBe(false);
            !result.success && expect(result.error.type).toBe("missing");
        });

        it("should not pass the check with error: size ", async (): Promise<void> => {
            const result: CheckResult = await check({
                fileSize: fileSize + 1,
                totalChunks,
                chunks,
            });

            expect(result.success).toBe(false);
            !result.success && expect(result.error.type).toBe("size");
        });

        it("should pass the check", async (): Promise<void> => {
            const result: CheckResult = await check({
                fileSize,
                totalChunks,
                chunks,
            });

            expect(result.success).toBe(true);
        });

        it("should be able to merge", async (): Promise<void> => {
            const result: MergeResult = await merge({
                chunks,
            });

            expect(result.blob.size).toBe(fileSize);
        });
    }
});
