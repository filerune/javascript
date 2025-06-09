[@filerune/fusion](../README.md) / CheckResult

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

Defined in: [packages/fusion/src/@types/base/check.ts:60](https://github.com/filerune/javascript/blob/e35128d5deea4a3f64742db5fcfda1a7f8c2cb71/packages/fusion/src/@types/base/check.ts#L60)

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
