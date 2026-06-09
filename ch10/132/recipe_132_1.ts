type MaybeString = string | null | undefined;

type DefiniteString = NonNullable<MaybeString>; // string のみが保持される

const example1: DefiniteString = "こんにちは"; // OK
const example2: DefiniteString = null; // エラー
const example3: DefiniteString = undefined; // エラー

console.log(example1, example2, example3);

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/C4TwDgpgBAsghiARhAysATgSwHYHMoC8UAzhjvgD5TYCuANnVFTdgCYQBmOErA3AFD9QkKABFOOTMFRk8hKADkA9tgX06cRHQgAeeEhlY8APl5QA9OZKz8gOwZA-gyAZBkC78oEBjQKoMgGIZA0QyCAxiqkUBAAHnAAtmDaAIwAXGIS2FKG5PIARIDKDIDJDIDWDICGDID2DGlmllAA8gDS-AHYQaERURAATPHiXEnSaEb4RLQMJVaAFQyAlwyAPwzVgcDBYZHaAMyticldqUQs7O08A1Aj4xO1StoAdHRKuAAU9bMQ0QA00w3aTfdXjXMAlLxAA
