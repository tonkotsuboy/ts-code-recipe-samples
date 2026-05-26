class MathUtils {
  static add(a: number, b: number): number {
    return a + b;
  }
}

const mathUtils = new MathUtils();
mathUtils.add(5, 3); // コンパイルエラー
