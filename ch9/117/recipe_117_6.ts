// このファイルは意図的なコンパイルエラーデモです（TS1360 / TS2322）。
// ageがstring型になっているため、satisfies の型チェックで失敗します。
const user = {
  name: "鈴木",
  age: "24", // × Type 'string' is not assignable to type 'number'
} satisfies {
  name: string;
  age: number;
};
