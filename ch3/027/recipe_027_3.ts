// 意図的な型エラーデモ（TS2322）。string型に推論された後にnumberを代入するとエラー
let myName = "鈴木"; // myNameはstring型に推論される
myName = 24; // コンパイルエラー
