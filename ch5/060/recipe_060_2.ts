// 意図的な型エラーのデモ: string[] に数値 30 を入れているため TS2322 が発生する
const names: string[] = ["鈴木", "田中", 30];
console.log(names);
