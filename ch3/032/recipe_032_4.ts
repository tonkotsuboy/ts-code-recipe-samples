// 意図的な型エラーデモ（TS2420）。MyAnimal2クラスはwalkメソッドが欠けているので
// Animalインターフェースを実装していない扱いになる
interface Animal {
  name: string;
  walk(): void;
}

class MyAnimal2 implements Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
  // walkメソッドがないためエラー
}
