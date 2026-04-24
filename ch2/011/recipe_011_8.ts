// 注: string 型に number を代入するコンパイルエラー（TS2322）を示すサンプル。
let userName: string = "田中";
userName = 100; // コンパイルエラー：string型にnumber型は代入できない
