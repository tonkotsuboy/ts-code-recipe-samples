// Before（erasableSyntaxOnlyでエラーになる例）: クラスのパラメータプロパティ
// 期待エラーコード: TS1294 - This syntax is not allowed when 'erasableSyntaxOnly' is enabled.
class MyClass {
  constructor(private myField: string) {}
}
