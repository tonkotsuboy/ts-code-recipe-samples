// クラス定義のみのサンプルのため、末尾に動作確認用の `new` 呼び出しを追加しています（書籍にはありません）。
class Animal {
  name; // nameプロパティを持つことを宣言
  age; // ageプロパティを持つことを宣言

  // コンストラクター
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

// 動作確認用（書籍では recipe_143_2.js 側でインスタンス化しています）
const dog = new Animal("ポチ", 3);
console.log(dog.name); // 出力: ポチ
console.log(dog.age); // 出力: 3
