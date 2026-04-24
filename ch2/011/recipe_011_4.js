// 注: 同一スコープでの再宣言は SyntaxError。そのことを確認するためのデモ。
let counter = 0;
let counter = 10; // SyntaxError：すでに宣言されている
// 代入は可能
counter = 10; // OK
