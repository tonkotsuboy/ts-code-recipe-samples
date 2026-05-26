const calculate = (a: number, b: number): number => {
  return a + b;
};

calculate(1, 2); // OK
calculate("鈴木", "田中"); // コンパイルエラー
