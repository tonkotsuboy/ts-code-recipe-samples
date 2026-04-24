// 書籍: add.js の実装例（型注釈なし）。TypeScriptの--strictでは暗黙的any（TS7006）となるため、
// 型なしJavaScript相当の挙動を示すデモとして配布しています。
// 型を付けた「誤りを防ぐ」バージョンは recipe_043_10.ts を参照してください。
// @ts-nocheck
function add(a, b) {
  return a + b;
}
