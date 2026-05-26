// エラー: Required type parameters may not follow optional type parameters.
// (必須の型パラメーターは、オプショナルな型パラメーターの後に記述できません)
type MyType<T = string, U> = {
  a: T;
  b: U;
};
