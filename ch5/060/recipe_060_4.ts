// 意図的な型エラーのデモ: names.push(120) で TS2345 が発生する
const names: string[] = ["鈴木", "田中", "後藤"];
console.log(names[0]); // "鈴木"（string型）
names.push("佐藤");
names.push(120); // エラー
