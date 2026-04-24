// 書籍の当該コードブロックでは末尾に未定義の `calculator` 変数を参照する行があり、そのままでは実行できません。
// 原稿（drafts/chapter12/12-1.md）に合わせて動く形に修正しています。
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
