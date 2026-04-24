// strictNullChecks（strict: true）下で、nullは number 型に代入できません。
// 期待エラーコード: TS2322 - Type 'null' is not assignable to type 'number'.
let a: number;
a = null; // エラー: Type 'null' is not assignable to type 'number'.
