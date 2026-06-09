function* fruitGenerator() {
  yield "りんご";
  yield "バナナ";
  yield "チェリー";
}

for (const fruit of fruitGenerator()) {
  console.log(fruit);
}
// りんご, バナナ, チェリー

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99&filetype=js&checkJs=false#code/GYVwdgxgLglg9mAVAAmAJxDKBxApmXNAQyjjQAoBKZAbwChlkBPGXAGwBNkAiQKIZBkhkAqDNwDcDZq049ACwyAphlmjxLdl26BBhkDlDICuGQD8MigL506wMsnIQEAZyioMWZHGC3MOfIRJkq1eowthLcGy4AHRscADm5OgulGKGAPTxyAKCADTIcrLpmrpAA
