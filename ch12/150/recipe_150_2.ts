class MyClass {
  #myAge = 42; // プライベートフィールドを定義

  getMyAge(): number {
    return this.#myAge; // プライベートフィールドにアクセス
  }
}

const myClass = new MyClass();
console.log(myClass.getMyAge()); // 42

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/MYGwhgzhAECyCeBhcVoG8BQ1oGIC28AggOYCm0AvNACwBMA3NAPRPSDrDIJcMgJQyCbDID8MgCYZAqwyBihj6BrhkCTDICSGQFnagSv8MWaGQAuCEqQAUASgBc0AHYBXPACNSAJ3TLsl0quOXD0VQAsAlhAB0+ImUYWdm5+YTEpQGsGQCKGQHqGQG6GQE6GZQBfDFSMYAB7QwhVaAJkSBgqQ1IAdzgkFAhdegzsiEyQUm8QTOItAurvNQ0yXR1A1jogA
