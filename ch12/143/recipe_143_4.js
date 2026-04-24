// 書籍では recipe_143_3.js で定義した Calculator クラスを前提にメソッド呼び出しのみを示していますが、
// 単体で動くように同じクラス定義を同梱しています。
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
