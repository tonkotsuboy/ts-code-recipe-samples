// erasableSyntaxOnly: true で、enum / namespace / クラスのパラメータプロパティはエラーになります。
// 期待エラーコード: TS1294 - This syntax is not allowed when 'erasableSyntaxOnly' is enabled.
enum MyEnum {
  A,
  B,
  C,
}

namespace myNameSpace {
  export const foo = 1;
}

class MyClass {
  constructor(private myField: string) {}
}
