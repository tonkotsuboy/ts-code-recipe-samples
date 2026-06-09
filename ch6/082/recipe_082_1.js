const person = {
  name: "太郎",
  greet() {
    console.log(`こんにちは、${this.name}さん`);
  },
};

person.greet(); // 出力: こんにちは、太郎さん

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99&filetype=js&checkJs=false#code/MYewdgzgLgBADgUwE4XDAvDA3gKBjMAQwFsEAuGAIkCpNQOYTKAaPGAcyQQSgAoBKbZ-KEggANggB0IkCy4ADQMoMgZIZA1gyBDBkD2DIEAGACRYoACwCWEcUVIBfQKoMi2TwDczc03MOciFOHFsO3ezAD0-jCAX4qA2UoUSmpadNZAA
