function processInput(input: string | null | undefined) {
  input ??= "デフォルトメッセージ";
  console.log(`処理結果: ${input}`);
  return input;
}
processInput(null); // 処理結果: デフォルトメッセージ
processInput("ユーザー入力"); // 処理結果: ユーザー入力
processInput(""); // 処理結果: （空文字列のまま）
