// 意図的な型エラーデモ（TS2322）。let宣言後に異なる型への再代入がエラーになる
let myName: string = "鈴木";
myName = 24; // 「24」はnumber型なのでエラー
