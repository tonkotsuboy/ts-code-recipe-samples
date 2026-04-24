// 意図的な型エラーデモを含む（example2・example3 は TS2322）。
type MaybeString = string | null | undefined;

type DefiniteString = NonNullable<MaybeString>; // string のみが保持される

const example1: DefiniteString = "こんにちは"; // OK
const example2: DefiniteString = null; // エラー
const example3: DefiniteString = undefined; // エラー

console.log(example1, example2, example3);
