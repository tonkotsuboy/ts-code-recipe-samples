async function useDefaultExportWithDestructuring() {
  const { default: Calculator } = await import("./Calculator");
  const calc = new Calculator();
  console.log(calc.add(10, 20)); // 30
}

useDefaultExportWithDestructuring();
