// Before（erasableSyntaxOnlyでエラーになる例）: namespace
// 期待エラーコード: TS1294 - This syntax is not allowed when 'erasableSyntaxOnly' is enabled.
namespace myNameSpace {
  export const myName = "とんこつ";
}
