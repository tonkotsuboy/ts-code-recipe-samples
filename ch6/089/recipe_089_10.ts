// AsyncGenerator<yield型, return型, next型>
async function* typedAsyncGenerator(): AsyncGenerator<
  string,
  void,
  unknown
> {
  yield await Promise.resolve("文字列1");
  yield await Promise.resolve("文字列2");
}

async function main() {
  for await (const v of typedAsyncGenerator()) {
    console.log(v);
  }
}
main();
// 文字列1
// 文字列2

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3#code/PTAEEEGcE8DsGMDiBTWyBOBDALge3QDzQCWyANgCaDR6gDSjrLYCu6stoaAHtlQHwBQmGAlAAzJgmzFcsAFShs0AA7IKUOElQYc+ABQBKAFwRhmtFjyF+oUJGzpisAOY1roAG65iFVzYkBrWFwAd1h+XlAAbzcScgpQTGDMYmxQAAV0XABbYkhkADoGSFwyd2RdACJAcNNAdW1AdCUARgr9AG4Y0koEpJT0zJy8wuRi0vLq+oAmZraAX35BUzEJeCkZUCzk2AMot1F8LuTU3XgZOw9QXFEFZVV1BBRzHXQDfW2bG2PYYYKyXCddd1ablms3WjgMbRAoFqjX4kOh4yAA
