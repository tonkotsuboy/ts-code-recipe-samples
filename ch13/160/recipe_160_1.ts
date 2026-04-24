// 書籍ではimport文のみ掲載されていますが、単体で動かせるよう
// data.json を同フォルダに用意し、読み込んだ内容を出力するコードを追加しています。
import data from "./data.json" with { type: "json" };

console.log(data);
