class Calculator {
  add(a, b) {
    return a + b;
  }

  multiply(a, b) {
    return a * b;
  }
}

const calc = new Calculator();
console.log(calc.add(5, 3)); // 出力: 8
console.log(calc.multiply(4, 2)); // 出力: 8

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&filetype=js&checkJs=false#code/MYGwhgzhAEDCYmAV3AFwPYCdoG8BQ00YAJsQBRgA00ARgJS4GHSYCmqSmAdkdANS0A3EwC+eJgFsUqAJYAHEAE8K1eo2Yt2nHmGgAqIaLxi8wdFwipowBMGgBeaF1YB3OLZRgMmMnWFmLdBBWADoQdABzMhtEEJJyAFZqAGY6P2gAegzoQC-FQGylAC5oAA5Tcwgg0PComOAQqRBZBWUAFmoAJjTBTOz8ouKgA
