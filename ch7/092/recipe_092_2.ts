function convertNumber(value: any): void {
  // コンパイルエラーにならない
  value.toFixed(2);
}

// 配列を渡してもコンパイル時にはエラーにならず、実行時にランタイムエラーになる
convertNumber([1, 2, 3]);

// ブラウザ上で編集できます
// https://www.typescriptlang.org/play/?ts=6.0.3#code/GYVwdgxgLglg9mABBBA3ApgJygORAWwCMsAKVAQwBsR0AuRcsATwEp7U4YATRAbwChEiAPTDEgZoZAzwyBFhkAlDIGuGQBUMgS4ZAPwyBrBkBWDIEiGTYBEGQYgrV0AOihwAYjAAe6LiQBMLANz8Avv36jEgWUTA6EqASQyAhHaA6gyAZgyAQQxScvKAQmbqgPYMKho6gFoMgIAMgPnagDIRCcqSgP0MsoAHDClagNEM-ChgGNh4RKQA2gCMADSIjh0AzAC6rkA
