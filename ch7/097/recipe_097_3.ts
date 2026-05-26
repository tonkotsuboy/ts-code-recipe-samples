const nameList: readonly string[] = ["田中", "鈴木", "佐藤"];

console.log(nameList[0]); // 読み取りはできる
nameList[0] = "山田"; // エラー
nameList.push("山田"); // エラー
