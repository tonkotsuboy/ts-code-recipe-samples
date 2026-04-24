// このファイルは意図的なコンパイルエラーデモです（TS1360 / TS2322）。
// コンパイルエラー
const user = {
  name: "鈴木",
  // ageプロパティがstring型になっている
  age: "24",
} satisfies {
  name: string;
  age: number;
};
