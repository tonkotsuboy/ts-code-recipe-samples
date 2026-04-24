// クラス定義のみのサンプルのため、末尾に動作確認用の呼び出しを追加しています（書籍にはありません）。
class Calculator {
  // メソッドの定義
  add(a, b) {
    return a + b;
  }

  multiply(a, b) {
    return a * b;
  }
}

// 動作確認用（書籍では recipe_143_4.js 側でメソッドを呼び出しています）
const calc = new Calculator();
console.log(calc.add(5, 3)); // 出力: 8
console.log(calc.multiply(4, 2)); // 出力: 8
