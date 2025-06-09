[@filerune/fusion](../README.md) / isTypeOfFileChunk

# Function: isTypeOfFileChunk()

```ts
function isTypeOfFileChunk(chunk): boolean;
```

Defined in: [packages/fusion/src/functions/chunk.ts:50](https://github.com/filerune/javascript/blob/e35128d5deea4a3f64742db5fcfda1a7f8c2cb71/packages/fusion/src/functions/chunk.ts#L50)

This function checks whether the `chunk` object is a Chunk.

### Example

```ts
import type { FileChunk } from "@filerune/fusion";

import { isTypeOfFileChunk } from "@filerune/fusion";

const chunk: FileChunk = {
    // ...
};
const result: boolean = isTypeOfFileChunks(chunks);
```

## Parameters

### chunk

[`FileChunk`](../type-aliases/FileChunk.md)

## Returns

`boolean`
