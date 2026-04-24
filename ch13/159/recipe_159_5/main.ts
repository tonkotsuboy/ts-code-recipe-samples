async function useDefaultExport() {
  const module = await import("./Calculator");
  const Calculator = module.default; // デフォルトエクスポートを取得
  const calc = new Calculator();
  console.log(calc.add(5, 3)); // 8
  console.log(calc.multiply(4, 6)); // 24
}

useDefaultExport();
