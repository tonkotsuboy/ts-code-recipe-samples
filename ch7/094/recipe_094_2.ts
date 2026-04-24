// 意図的な型エラーデモ: タプル型の要素数・要素型ミスマッチ (期待エラー: TS2322)
const point1: [number, number] = [1, 2, 3]; // エラー
const point2: [number, number] = ["鈴木", "田中"]; // エラー
