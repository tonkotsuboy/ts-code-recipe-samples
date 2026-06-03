Promise.any([
  Promise.reject(new Error("エラー1")),
  Promise.reject(new Error("エラー2")),
]).catch((error) => {
  console.log(error); // AggregateError: All promises were rejected
});

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&filetype=js&checkJs=false#code/AoJw9gtglgzgpgOgIYDsCeAKA2gKAAR6iSyIhwBWcAxgC4YpwDueAoiOCBgESAVDIJcMgH4YAjFwCUogDT5C4aPARlKtek1bswnXoIBMYyTgC6ohFSQ0qACwwY46kKLwBeAHx4A3tKpgUMMABtEPzAAcxs7UQBuPAB6aLwAQWDgsmCzODYOAC4Evz88AAdZEhg8Rls4PEVqGjgAExwAX0igA
