function convertNumber(value: any): void {
  value.toFixed(2);
}

// コンパイルエラーにならないが、ランタイムエラーとなる
convertNumber("鈴木");
