// 三校PDFでは「recipe_177_7.ts」と記載されていますが、
// 同一レシピ内に「recipe_177_7/」フォルダ（namespace代替例）が既に存在するため、
// 本配布コードでは衝突を避けて「recipe_177_8.ts」としています。
// Before（erasableSyntaxOnlyでエラーになる例）: クラスのパラメータプロパティ
// 期待エラーコード: TS1294 - This syntax is not allowed when 'erasableSyntaxOnly' is enabled.
class MyClass {
  constructor(private myField: string) {}
}
