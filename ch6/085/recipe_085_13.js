function greet(greeting, ...names) {
  for (const name of names) {
    console.log(`${greeting}, ${name}!`);
  }
}

greet("こんにちは", "鈴木さん", "田中さん", "佐藤さん");
// こんにちは, 鈴木さん!
// こんにちは, 田中さん!
// こんにちは, 佐藤さん!

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&filetype=js&checkJs=false#code/GYVwdgxgLglg9mABAcwE4FN1QBRs7MZAGkQDpywBDAW3QGcBKRAbwChFFg5VFsIE6URFVqI4wYTXpM2HDvzB04AG3SllcZNgAGAEmZ4sMQgF8S+kehMBCbQwDc7RCdYvWhnACJAygyBkhkDWDICGDID2DJ4knoAsSYAU5oCqDL5hiJ6ADK6AtHJxCZ6ACvKAJ6HpDqwA9AWIfkHBJNFx1oXFpSEkqVU1JQH1iDlVQA
