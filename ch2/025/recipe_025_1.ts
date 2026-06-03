function processInput(input: string | null | undefined) {
  input ??= "デフォルトメッセージ";
  console.log(`処理結果: ${input}`);
  return input;
}

processInput(null); // 処理結果: デフォルトメッセージ
processInput("ユーザー入力"); // 処理結果: ユーザー入力
processInput(""); // 処理結果: （空文字列のまま）

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3#code/GYVwdgxgLglg9mABABwE5wgUwM7YJJjIhQAUMhxAXItlKuQOaIA+iYIANhy4uACaZg5THwCUiAN4AoRInJEoiAPxKAvIgBEgcYZAqwyBKhkDXDIAmGQIcMgYYZA3QyAfhkAdDBoDcMxBATY4HTADoOcBiQAGgGeKgGAugAq+gDnm1AAkEvLEAL7+oo6yqJhQIKhIcVCO8VJSaBg4+BSk7FzJiAD01YghEdS6hqaWtoXoWLgECiQagGcMVoBtDFaApoqA2UoaVbX1YZGIgyMTHcXdZX1T9jV1DfOAEP+AXl6A4aaA6tqA6EqAdgyAfgxXgJD-QA
