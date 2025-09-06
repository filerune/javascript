[@filerune/fusion](../../README.md) / [chunk](../README.md) / isTypeOfFileChunks

# Function: isTypeOfFileChunks()

```ts
function isTypeOfFileChunks(chunks): boolean;
```

Defined in: [packages/fusion/src/functions/chunk.ts:17](https://github.com/filerune/javascript/blob/d4f2362b551948c367109c80d3f38c321a319a3e/packages/fusion/src/functions/chunk.ts#L17)

This function checks whether the `chunks` parameter is an Array of Chunk.

### Example

```ts
import type { FileChunk } from "@filerune/fusion";

import { isTypeOfFileChunks } from "@filerune/fusion";

const chunks: FileChunk[] = []; // file chunks...
const result: boolean = isTypeOfFileChunks(chunks);
```

## Parameters

### chunks

[`FileChunk`](../type-aliases/FileChunk.md)[]

## Returns

`boolean`
