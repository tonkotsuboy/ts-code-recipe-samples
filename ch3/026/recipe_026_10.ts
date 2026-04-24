// 意図的な型エラーデモ（TS2345）。calculate("鈴木", "田中") の行で、string型の引数はnumber型のパラメーターに代入できない
const calculate = (a: number, b: number): number => {
  return a + b;
};

calculate(1, 2); // OK
calculate("鈴木", "田中"); // コンパイルエラー
