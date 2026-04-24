// 注: number 型に string を代入するコンパイルエラー（TS2322）を示すサンプル。
let price = 50000; // number型に推論
price = "高い"; // コンパイルエラー：number型にstring型は代入できない
