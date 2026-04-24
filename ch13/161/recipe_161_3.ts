// 書籍のスニペットに末尾の `export {};` を追加しています。
// declare global は外部モジュール内でのみ使えるため、
// 単体ファイルをそのままtsgoにかけるとTS2669が出ます。
// 実プロジェクトでは同じモジュール内に他のimport/exportがあるため問題になりません。
declare global {
  var __DEV__: boolean;
}

globalThis.__DEV__ = true;

if (globalThis.__DEV__) {
  console.log("開発モードで実行中");
}

export {};
