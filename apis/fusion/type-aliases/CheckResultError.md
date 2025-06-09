[@filerune/fusion](../README.md) / CheckResultError

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

Defined in: [packages/fusion/src/@types/base/check.ts:33](https://github.com/filerune/javascript/blob/e35128d5deea4a3f64742db5fcfda1a7f8c2cb71/packages/fusion/src/@types/base/check.ts#L33)

Result error of the `check` function.

## Type declaration

### message

```ts
message: string;
```

Error message of the check.
