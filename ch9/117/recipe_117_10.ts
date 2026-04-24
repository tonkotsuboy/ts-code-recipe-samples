// このファイルは意図的なコンパイルエラーデモです（TS1360 / TS2322）。
// nameがnumber型になっているため、as const satisfies の型チェックで失敗します。
const user = {
  name: 123, // × Type 'number' is not assignable to type 'string'
  age: 24,
} as const satisfies {
  name: string;
  age: number;
};
