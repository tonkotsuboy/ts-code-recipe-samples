const nameList = ["田中", "鈴木", "佐藤"] as const;
// 型: readonly ["田中", "鈴木", "佐藤"]
nameList[0] = "山田"; // エラー
nameList.push("山田"); // エラー
