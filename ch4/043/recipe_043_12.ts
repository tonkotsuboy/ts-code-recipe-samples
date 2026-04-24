// 書籍: コンパイルエラーなし版（main.ts）。add の定義を同ファイルに含めています。
function add(a: number, b: number): number {
  return a + b;
}

const result = add(10, 2);
console.log(result); // 12
