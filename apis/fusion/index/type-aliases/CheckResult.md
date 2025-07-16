[@filerune/fusion](../../README.md) / [index](../README.md) / CheckResult

# Type Alias: CheckResult

```ts
type CheckResult = 
  | {
  success: true;
}
  | {
  error: CheckResultError;
  success: false;
};
```

Defined in: [packages/fusion/src/@types/base/check.ts:60](https://github.com/filerune/javascript/blob/a2c89ff92ad9fd5f140f3923255826b139da58bf/packages/fusion/src/@types/base/check.ts#L60)

Result of the `check` function.

## Type declaration

```ts
{
  success: true;
}
```

### success

```ts
success: true;
```

Successful check.

```ts
{
  error: CheckResultError;
  success: false;
}
```

### error

```ts
error: CheckResultError;
```

Error details of the check.

### success

```ts
success: false;
```

Failed check.
