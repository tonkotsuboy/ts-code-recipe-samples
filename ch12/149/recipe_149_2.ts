// public 修飾子は省略可能であることを示すサンプルです。
class Example {
  greet(): void {
    console.log("こんにちは");
  }
}

const example = new Example();
example.greet(); // 出力: こんにちは（書籍にはこの呼び出しはありませんが、動作確認用に追加しています）
