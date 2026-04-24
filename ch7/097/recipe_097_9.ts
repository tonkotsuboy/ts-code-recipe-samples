// 意図的な型エラーデモ: as constで読み取り専用化されたタプルへの再代入・push呼び出しでエラー (期待エラー: TS2540, TS2339)
const nameList = ["田中", "鈴木", "佐藤"] as const;
// 型: readonly ["田中", "鈴木", "佐藤"]
nameList[0] = "山田"; // エラー
nameList.push("山田"); // エラー
