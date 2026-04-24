// 三校PDFでは「recipe_224_2.ts」と記載されていますが、
// このファイルはレシピ176（noImplicitOverride）の Before 例なので、
// 本来は recipe_176_2.ts が正しい想定です。配布コードでは 176_2 として配置しています。
// noImplicitOverride: true で、親クラスのメソッドを override 修飾子なしで再定義するとエラーになります。
// 期待エラーコード: TS4114 - This member must have an 'override' modifier because it overrides a member in the base class.
class Employee {
  showDetails() {
    console.log("Employee details");
  }
}

class Developer extends Employee {
  showDetails() {
    // エラー: override修飾子がないため
    console.log("Developer details");
  }
}
