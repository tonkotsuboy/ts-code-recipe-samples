// 意図的な型エラーデモです。静的メソッドへインスタンス経由でアクセスするとコンパイルエラー（TS2576）になります。
// 書籍では recipe_148_3.ts で定義された MathUtils クラスを前提としていますが、単体で動くように同梱しています。
class MathUtils {
  static add(a: number, b: number): number {
    return a + b;
  }
}

const mathUtils = new MathUtils();
mathUtils.add(5, 3); // コンパイルエラー
