// 意図的な型エラーデモです（super() より前で this を参照するとコンパイルエラー TS17009 になります）。
// TypeScript では `'super' must be called before accessing 'this' in the constructor of a derived class.` となります。
// 書籍では recipe_145_3.ts で定義された Person クラスを前提としていますが、単体で動くように同梱しています。
class Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

class BadStudent extends Person {
  constructor(name: string) {
    this.name = name; // コンパイルエラー
    super(name);
  }
}

// 実行すると ReferenceError: Must call super constructor in derived class ... になります。
// ただし TypeScript の型チェック段階で検出されます。
new BadStudent("山田");
