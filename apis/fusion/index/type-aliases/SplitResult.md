[@filerune/fusion](../../README.md) / [index](../README.md) / SplitResult

# Type Alias: SplitResult

```ts
type SplitResult = object;
```

Defined in: [packages/fusion/src/@types/base/split.ts:30](https://github.com/filerune/javascript/blob/a2c89ff92ad9fd5f140f3923255826b139da58bf/packages/fusion/src/@types/base/split.ts#L30)

Result of the `split` function.

## Properties

### chunks

```ts
chunks: FileChunk[];
```

Defined in: [packages/fusion/src/@types/base/split.ts:34](https://github.com/filerune/javascript/blob/a2c89ff92ad9fd5f140f3923255826b139da58bf/packages/fusion/src/@types/base/split.ts#L34)

The chunks splitted from the original file.

***

### fileSize

```ts
fileSize: number;
```

Defined in: [packages/fusion/src/@types/base/split.ts:38](https://github.com/filerune/javascript/blob/a2c89ff92ad9fd5f140f3923255826b139da58bf/packages/fusion/src/@types/base/split.ts#L38)

Size of the original file.

***

### totalChunks

```ts
totalChunks: number;
```

Defined in: [packages/fusion/src/@types/base/split.ts:42](https://github.com/filerune/javascript/blob/a2c89ff92ad9fd5f140f3923255826b139da58bf/packages/fusion/src/@types/base/split.ts#L42)

The total number of chunks splitted from the original file.
