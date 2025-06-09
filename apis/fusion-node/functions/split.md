[@filerune/fusion-node](../README.md) / split

# Function: split()

```ts
function split(options): Promise<SplitResult>;
```

Defined in: [packages/fusion-node/src/base/split.ts:22](https://github.com/filerune/javascript/blob/e35128d5deea4a3f64742db5fcfda1a7f8c2cb71/packages/fusion-node/src/base/split.ts#L22)

This function splits file from a path to a directory directly.

It will only return the `fileSize` and the `totalChunks` of the file.

### Example

```ts
import { split } from "@filerune/fusion-node";

await split({
    inFile: "/path/to/file.txt",
    outDir: "/path/to/dir",
    chunkSize: 2 * 1024 * 1024,
});
```

## Parameters

### options

#### chunkSize

`number`

The size of each chunk in byte.

#### inFile

`string`

Input file to be splitted in the `split` function.

#### outDir

`string`

Output directory after splitted in the `split` function.

#### splitFunction?

(`options`) => 
  \| [`SplitResult`](../type-aliases/SplitResult.md)
  \| `Promise`\<[`SplitResult`](../type-aliases/SplitResult.md)\>

## Returns

`Promise`\<[`SplitResult`](../type-aliases/SplitResult.md)\>
