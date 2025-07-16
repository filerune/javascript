[@filerune/fusion](../../README.md) / [chunk](../README.md) / isTypeOfFileChunks

# Function: isTypeOfFileChunks()

```ts
function isTypeOfFileChunks(chunks): boolean;
```

Defined in: [packages/fusion/src/functions/chunk.ts:17](https://github.com/filerune/javascript/blob/a2c89ff92ad9fd5f140f3923255826b139da58bf/packages/fusion/src/functions/chunk.ts#L17)

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
