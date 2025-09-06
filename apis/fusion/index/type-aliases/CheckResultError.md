[@filerune/fusion](../../README.md) / [index](../README.md) / CheckResultError

# Type Alias: CheckResultError

```ts
type CheckResultError = object & 
  | {
  missing: number[];
  type: "missing";
}
  | {
  type: "size";
};
```

Defined in: [packages/fusion/src/@types/base/check.ts:33](https://github.com/filerune/javascript/blob/d4f2362b551948c367109c80d3f38c321a319a3e/packages/fusion/src/@types/base/check.ts#L33)

Result error of the `check` function.

## Type Declaration

### message

```ts
message: string;
```

Error message of the check.
