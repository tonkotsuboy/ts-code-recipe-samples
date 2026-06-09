function greet(user: { name: string }) {
  console.log(`こんにちは、${user.name}さん！`);
}

greet({ name: "田中" }); // こんにちは、田中さん！

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/GYVwdgxgLglg9mABAcwE4FN1QBQgM7qoBciA3omAIYC26JeUqMYyiAvgJRkBQiiECPHAA26AHTC4ybAANAygyBkhkDWDIEMGQPYMgQAYAJKXyExVWm0CqDAsCA-zI4Bubm27c0mHOUN1EAIkAMroFo5d+2uIAPSBiIqqmj6mZkA
