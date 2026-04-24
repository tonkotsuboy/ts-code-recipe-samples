// 意図的な型エラーデモ: as constで再帰的に読み取り専用化された配列の要素・ネストされたプロパティへの再代入でエラー (期待エラー: TS2540)
const dataList = [
  { name: "田中", age: 24 },
  { name: "鈴木", age: 30 },
] as const;
dataList[0] = { name: "山田", age: 30 }; // エラー
dataList[0].name = "山田"; // エラー（ネストも読み取り専用）
dataList[0].age = 25; // エラー
