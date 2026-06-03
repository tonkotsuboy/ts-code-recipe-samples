function isNumber(value: number | string): value is number {
  return typeof value === "string";
}

function main(value: number | string) {
  // ランタイムエラーになるまで気づけない
  if (isNumber(value)) {
    value.toFixed(2); // TypeError: value.toFixed is not a function
  }
}

main("豚骨きゅうり");
// 実行結果：TypeError: value.toFixed is not a function

// ブラウザ上で編集できます
// https://www.typescriptlang.org/play/?ts=6.0.3#code/GYVwdgxgLglg9mABDAzgORAWwEYFMBOAFAG4CGANiLgFyJhZ76IA+iKU+MYA5gJS1lKuZCjoMCiAN4AoRIny4oIfEigBPAA644wRIKqIAvMcQAidpx6mA3NIC+06aEiwEiTKS4kKVWvRwSrBZcfFKyiAD0EYiAlwyAzwyA-QyAJQyABwyAFQwxgD8MgNYMgFYMgNEMgH4MgOYMgOg2gKYMgIoMuYAiDOEwuoSoGAFE+ri8vGFycu0AdFBwAGIwAB64ACaEAEy81pHRACqauACi+Phw+AI+uAPDY5MidHBQiKSIztDwYOEODtIeXqaAWjGAFVmAsgyAoQyAYgyAUQymObSKKIQD52oAZCMACr6AHPNAFj-yy06022z0u32I3GE2OYFO50u4GuCCAA
