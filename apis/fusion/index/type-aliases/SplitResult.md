[@filerune/fusion](../../README.md) / [index](../README.md) / SplitResult

# Type Alias: SplitResult

```ts
type SplitResult = object;
```

Defined in: [packages/fusion/src/@types/base/split.ts:30](https://github.com/filerune/javascript/blob/d4f2362b551948c367109c80d3f38c321a319a3e/packages/fusion/src/@types/base/split.ts#L30)

Result of the `split` function.

## Properties

### chunks

```ts
chunks: FileChunk[];
```

Defined in: [packages/fusion/src/@types/base/split.ts:34](https://github.com/filerune/javascript/blob/d4f2362b551948c367109c80d3f38c321a319a3e/packages/fusion/src/@types/base/split.ts#L34)

The chunks splitted from the original file.

***

### fileSize

```ts
fileSize: number;
```

Defined in: [packages/fusion/src/@types/base/split.ts:38](https://github.com/filerune/javascript/blob/d4f2362b551948c367109c80d3f38c321a319a3e/packages/fusion/src/@types/base/split.ts#L38)

Size of the original file.

***

### totalChunks

```ts
totalChunks: number;
```

Defined in: [packages/fusion/src/@types/base/split.ts:42](https://github.com/filerune/javascript/blob/d4f2362b551948c367109c80d3f38c321a319a3e/packages/fusion/src/@types/base/split.ts#L42)

The total number of chunks splitted from the original file.
