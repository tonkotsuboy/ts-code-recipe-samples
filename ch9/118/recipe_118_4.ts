// このファイルは意図的なコンパイルエラーデモです（TS2322）。
// C は never 型なので、値を代入しようとするとエラーになります。
type OnlyString<T> = T extends string ? T : never;

type C = OnlyString<number>; // never

const c: C = 10;
// Error: Type '10' is not assignable to type 'never'.
