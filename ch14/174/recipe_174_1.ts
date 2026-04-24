// noUncheckedIndexedAccess がOFFの場合の挙動を示すサンプルです。
// foods[2] は存在しないため、実行時に TypeError が発生します。
// TypeScript の型チェック自体は通ります（型推論上は string）。
const foods: string[] = ["カレー", "うどん"];
console.log(foods[0].at(0)); // 「カ」が出力される
console.log(foods[1].at(0)); // 「う」が出力される
console.log(foods[2].at(0)); // ランタイムエラーが発生する
