class MyClass {
  #myAge = 42; // プライベートフィールドを定義

  getMyAge(): number {
    return this.#myAge; // プライベートフィールドにアクセス
  }
}

const myClass = new MyClass();
myClass.#myAge;
// エラー: Property '#myAge' is not accessible outside class
// 'MyClass' because it has a private identifier.

// ブラウザ上で編集できます
// https://www.typescriptlang.org/play/?ts=6.0.3#code/MYGwhgzhAECyCeBhcVoG8BQ1oGIC28AggOYCm0AvNACwBMA3NAPRPSDrDIJcMgJQyCbDID8MgCYZAqwyBihj6BrhkCTDICSGQFnagSv8MWaGQAuCEqQAUASgBc0AHYBXPACNSAJ3TLsl0quOXD0VQAsAlhAB0+ImUYWdm5+YTEpQGsGQCKGQHqGQG6GQE6GZQBfDFSMYAB7QwhVaAJkSBgqQ1IAdzgkFAhdegwC6t8CTTqgwAqGDj4DAAVLTIAHK1V4aAByP01R6C8jTLywYGBSKA8zEHJM41UIDwATclAijCDRhEKoKYtgMGMIcg88t0hoMGh+yw8ANzBVe-3DVQeABmHis3iAA
