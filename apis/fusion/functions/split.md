[@filerune/fusion](../README.md) / split

# Function: split()

```ts
function split(options): Promise<SplitResult>;
```

Defined in: [packages/fusion/src/base/split.ts:26](https://github.com/filerune/javascript/blob/e35128d5deea4a3f64742db5fcfda1a7f8c2cb71/packages/fusion/src/base/split.ts#L26)

This function splits file into chunks,
and the chunks can be used to check and merge later.

It will return the `chunks`, `fileSize` and `totalChunks`.

### Example

```ts
import { split } from "@filerune/fusion";

const file: File | Blob | Uint8Array | string = "";

await split({
    file,
    chunkSize: 2 * 1024 * 1024,
});
```

## Parameters

### options

#### chunkSize

`number`

The size of each chunk in byte.

#### file

`string` \| `Blob` \| `File` \| `Uint8Array`\<`ArrayBufferLike`\>

file to split, which accepts:
- File / Blob
- Uint8Array data
- Base64 data prefixed with "data:"

#### splitFunction?

(`options`) => 
  \| [`SplitResult`](../type-aliases/SplitResult.md)
  \| `Promise`\<[`SplitResult`](../type-aliases/SplitResult.md)\>

## Returns

`Promise`\<[`SplitResult`](../type-aliases/SplitResult.md)\>
