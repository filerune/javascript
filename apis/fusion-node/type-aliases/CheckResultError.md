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

Defined in: packages/fusion/dist/internal-Dsk8EtP4.d.ts:82

Result error of the `check` function.

## Type declaration

### message

```ts
message: string;
```

Error message of the check.
