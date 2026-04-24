// Before（erasableSyntaxOnlyでエラーになる例）: enum
// 期待エラーコード: TS1294 - This syntax is not allowed when 'erasableSyntaxOnly' is enabled.
enum MyEnum {
  A,
  B,
  C,
}
