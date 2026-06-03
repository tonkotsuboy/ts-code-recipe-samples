let count = 0;

while (true) {
  count++;
  console.log(`カウント: ${count}`);

  // 5に達したらループを抜ける
  if (count === 5) {
    console.log("ループを終了します");
    break;
  }
}

// 実行結果: カウント: 1, カウント: 2, ... カウント: 5, ループを終了します

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3#code/DYUwLgBAxg9grgO0gXggBgNwCgsHcAWAlqBABRgBOcIAlBAN5YTTxIDUb2zsCAzjKAB0wGAHNSAA0DVDIDKGQM8MgCYYAXBAAk9WIjABfCTWxMIAeiMQArIGsGQCoJgdQZA+gyBIhkDXDIB+GQOsMgJIZAOUaBFBkDRDIaEAGZkmkgQyJHmdIzM3DB8AiDCYqQARK6egEK+gGFyNoB+DICaDGn6hswARhQgAIYA1lwQ2lhNWCYQgPnagDIRgAq+gDnmKrKKKgCMADQQg8oQAEzjgvMT8lNm45keuQWFQA
