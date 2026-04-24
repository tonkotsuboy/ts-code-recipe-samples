// 意図的な型エラーデモ（TS2322）。Colorには"pink"がないので代入不可
// 書籍では直前のrecipe_029_3で宣言したColorを流用していますが、単体で動くよう再掲しています
type Color = "red" | "blue" | "yellow";
// Colorにないのでエラー
const color4: Color = "pink";
