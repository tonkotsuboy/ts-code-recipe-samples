// 意図的な型エラーデモ: Uppercase/Lowercase型に合わない値の代入でエラー (期待エラー: TS2322)
const upper: Uppercase<"hello world"> = "hello world"; // エラー
const lower: Lowercase<"HELLO WORLD"> = "HELLO WORLD"; // エラー
