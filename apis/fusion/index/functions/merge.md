[@filerune/fusion](../../README.md) / [index](../README.md) / merge

# Function: merge()

```ts
function merge(options): Promise<MergeResult>;
```

Defined in: [packages/fusion/src/base/merge.ts:21](https://github.com/filerune/javascript/blob/a2c89ff92ad9fd5f140f3923255826b139da58bf/packages/fusion/src/base/merge.ts#L21)

This function merges the chunks by using the `chunks` parameters.

It will return the `blob` of the merged file.

### Example

```ts
import { merge } from "@filerune/fusion";

await merge({
    chunks: [], // result from split function...
});
```

## Parameters

### options

#### chunks

[`FileChunk`](../../chunk/type-aliases/FileChunk.md)[]

Chunks to be merged in the `merge` function.

#### mergeFunction?

(`options`) => 
  \| [`MergeResult`](../type-aliases/MergeResult.md)
  \| `Promise`\<[`MergeResult`](../type-aliases/MergeResult.md)\>

Custom merge function for the `merge` function.

## Returns

`Promise`\<[`MergeResult`](../type-aliases/MergeResult.md)\>
