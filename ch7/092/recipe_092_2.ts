function convertNumber(value: any): void {
  // コンパイルエラーにならない
  value.toFixed(2);
}

// 配列を渡してもコンパイル時にはエラーにならず、実行時にランタイムエラーになる
convertNumber([1, 2, 3]);
