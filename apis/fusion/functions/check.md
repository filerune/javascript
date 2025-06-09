[@filerune/fusion](../README.md) / check

# Function: check()

```ts
function check(options): Promise<CheckResult>;
```

Defined in: [packages/fusion/src/base/check.ts:26](https://github.com/filerune/javascript/blob/e35128d5deea4a3f64742db5fcfda1a7f8c2cb71/packages/fusion/src/base/check.ts#L26)

This function checks file integrity.

It will check file integrity by verifying
the `chunks` with `fileSize` and `totalChunks` parameters.

It will return the `status` and the `error` of the check.

### Example

```ts
import { check } from "@filerune/fusion";

await check({
    chunks: [], // result from split function...
    fileSize: 0, // result from split function...
    totalChunks: 0, // result from split function...
});
```

## Parameters

### options

#### checkFunction?

(`options`) => 
  \| [`CheckResult`](../type-aliases/CheckResult.md)
  \| `Promise`\<[`CheckResult`](../type-aliases/CheckResult.md)\>

Custom check function for the `check` function.

#### chunks

[`FileChunk`](../type-aliases/FileChunk.md)[]

Chunks to be checked in the `check` function.

#### fileSize

`number`

Size of the original file,
which can be found as an output of the `split` function.

#### totalChunks

`number`

Total number of chunks in the original file,
which can be found as an output of the `split` function.

## Returns

`Promise`\<[`CheckResult`](../type-aliases/CheckResult.md)\>
