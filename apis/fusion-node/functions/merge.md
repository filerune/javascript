[@filerune/fusion-node](../README.md) / merge

# Function: merge()

```ts
function merge(options): Promise<void>;
```

Defined in: [packages/fusion-node/src/base/merge.ts:21](https://github.com/filerune/javascript/blob/d4f2362b551948c367109c80d3f38c321a319a3e/packages/fusion-node/src/base/merge.ts#L21)

This function merges the chunks from a directory to a specified path directly.

It will return `true` as the result.

### Example

```ts
import { merge } from "@filerune/fusion-node";

await merge({
    inDir: "/path/to/dir",
    outFile: "/path/to/file.txt",
});
```

## Parameters

### options

#### inDir

`string`

Input directory to be merged in the `merge` function.

#### mergeFunction?

(`options`) => `void` \| `Promise`\<`void`\>

Custom merge function for the `merge` function.

#### outFile

`string`

Output file after merging in the `merge` function.

## Returns

`Promise`\<`void`\>
