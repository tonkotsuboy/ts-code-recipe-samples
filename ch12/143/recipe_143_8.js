class Calculator {
  add(a, b) {
    return a + b;
  }

  multiply(a, b) {
    return a * b;
  }
}

const calc = new Calculator();
console.log(calc.add(5, 3)); // 出力: 8
console.log(calc.multiply(4, 2)); // 出力: 8
