// 意図的な型エラーデモ（TS2706）。デフォルト値を持つ型パラメーターの後にデフォルト値のない型パラメーターは定義できない
// エラー: Required type parameters may not follow optional type parameters.
// (必須の型パラメーターは、オプショナルな型パラメーターの後に記述できません)
type MyType<T = string, U> = {
  a: T;
  b: U;
};
