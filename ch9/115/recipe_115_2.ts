function isString(value: unknown) {
  return typeof value === "string";
}
// ホバーすると: function isString(value: unknown): value is string

function isNumber(value: number | string) {
  return typeof value === "number";
}
// ホバーすると:
// function isNumber(value: number | string): value is number

// ブラウザ上で編集できます
// https://www.typescriptlang.org/play/?ts=6.0.3#code/GYVwdgxgLglg9mABDAzgZSgJxmA5gCgDcBDAGxAFMAuRcAazDgHcwBKRAbwChFFMKoITEigBPAA4U4wRCXIVEAXmWIARCiw5cqgNxcAvlwD0RxIG2GQAsMgH4ZAmgyBohkAWDDVCRYCZOk14iZSjXqMLKw0cpQeiBrYeFxcLtDwSKgAciAAtgBGFJg+8jRgaZmYiAA+EV647Ny8-ILCiGKS0rK+CsqKavkZWboGxqaWto5UfYhxbokoKV3ZodSInYUlZVEVIS3hC1lAA
