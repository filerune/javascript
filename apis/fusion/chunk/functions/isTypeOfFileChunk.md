[@filerune/fusion](../../README.md) / [chunk](../README.md) / isTypeOfFileChunk

# Function: isTypeOfFileChunk()

```ts
function isTypeOfFileChunk(chunk): boolean;
```

Defined in: [packages/fusion/src/functions/chunk.ts:51](https://github.com/filerune/javascript/blob/a2c89ff92ad9fd5f140f3923255826b139da58bf/packages/fusion/src/functions/chunk.ts#L51)

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
