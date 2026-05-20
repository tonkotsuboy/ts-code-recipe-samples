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
