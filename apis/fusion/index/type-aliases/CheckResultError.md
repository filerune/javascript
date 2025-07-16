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

Defined in: [packages/fusion/src/@types/base/check.ts:33](https://github.com/filerune/javascript/blob/a2c89ff92ad9fd5f140f3923255826b139da58bf/packages/fusion/src/@types/base/check.ts#L33)

Result error of the `check` function.

## Type declaration

### message

```ts
message: string;
```

Error message of the check.
