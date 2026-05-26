// 単体で型チェックが通るよう、A・B・Cのダミー型を補完しています
type A = { a: string };
type B = { b: number };
type C = { c: boolean };

type MyType = A & B & C;
