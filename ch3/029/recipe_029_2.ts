// 意図的な型エラーデモ（TS2322）。NumberOrStringはnumber|stringなのでboolean（true）は代入不可
// 書籍では直前のrecipe_029_1で宣言した型を流用していますが、単体で動くよう再掲しています
type NumberOrString = number | string;
const valueC: NumberOrString = true; // エラー
