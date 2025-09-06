[@filerune/fusion-node](../README.md) / CheckResultError

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

Defined in: packages/fusion/dist/@types/base/check.d.ts:28

Result error of the `check` function.

## Type Declaration

### message

```ts
message: string;
```

Error message of the check.
