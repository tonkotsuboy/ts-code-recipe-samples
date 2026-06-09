function* numbers() {
  yield 1;
  yield 2;
}

function* letters() {
  yield "A";
  yield "B";
}

function* combined() {
  yield* numbers();
  yield* letters();
}

const result = [...combined()];
console.log(result); // [1, 2, "A", "B"]

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99&filetype=js&checkJs=false#code/GYVwdgxgLglg9mAVAAjCAtgIwKYCcDOAFAJTIDeAUMsgJ4zYA2AJsgIwDcVt9zyATJwC+FCqEiwEKBtihQ8RUpWp1GLAEQBBNZ2U91AIW0Vho8NHhJkEOFhhhsTEuS4rmKNFnkkd3VVJlyBN7GItZg+FDIuNj4IAyRALzIANoAdOnWtvaOxAC6nGH4cNKpDHAA5oTRsfHE7MgA9A0prAA0-O2aap2GuUA
