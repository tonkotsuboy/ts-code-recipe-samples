// コンパイルエラー
const user = {
  name: "鈴木",
  // ageプロパティがstring型になっている
  age: "24",
} satisfies {
  name: string;
  age: number;
};
