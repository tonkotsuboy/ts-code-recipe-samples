function* simpleGenerator() {
  const value1 = yield "A";
  console.log("受け取った値:", value1);
  const value2 = yield "B";
  console.log("受け取った値:", value2);
}
const gen = simpleGenerator();
console.log(gen.next().value);
// "A" (最初のnext()の引数は無視される)
console.log(gen.next("Hello").value);
// "受け取った値: Hello" が出力 → "B"
console.log(gen.next("World").value);
// "受け取った値: World" が出力 → undefined

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99&filetype=js&checkJs=false#code/GYVwdgxgLglg9mAVAAgM4wLYAcA2BTAcTzDwCcBDKOUgCgEpkBvAKGWQgVSmQDdycQeAIzIAvMgCeMPDgAmyAEQBBBQG5W7TnHwA6HHADmNBYHXlQIoMgNeVAxgyB9BkAkCgC4FAGl79BQuurYcwXNwJ4AExiktJyigBCahq+qNp4eobG5tb2Tq58gUFezAC+zHHcBsSh6Nj4RCQUVLS5cQlJRiVgOiQAHlD0OlmCuQD0-YoqyDSAAOaAuEqAdgwdXXRTgKj6gA6mgPYMgISOgGmRgKoMgDEMgNEMdIVauvrNxG14ncYAEjL6CnQ97ngDQ6aWto7Itzj3yIAyDIAvxUA2UrIQBJhFEFEc-I1TjQWhcrgoAOrUOQPJ6BV6KVKfBzIVGkdEAkHg5DgWR4YAwEiyIA
