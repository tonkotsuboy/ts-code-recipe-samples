const user = { name: "鈴木", age: 30 } as const;
// { readonly name: "鈴木"; readonly age: 30 } 型に推論される
// user.name = "田中"; // エラー：readonlyなプロパティは書き換えができない

// ブラウザ上で編集できます
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/MYewdgzgLgBArhApgJxgXhgbxmAhgW0QC4YAiQFiTAKc1IBoZcBzYmAZgAYYBfeiGUSKAG4AUAHpRWGMkS4AJuAA2ATxwFmFaoKkz5YZfSYl2XGIGj1QNYMgCuNAa1GBVBkAxDIGiGMRIQoAdHkLoygBldAtHKkWuIwgBUMgJcMgD8MgFj-0nKKSoBWDIDrDIC3DICLDIBjDIDFDID2DIAfZoCyDIDbxoASDIAyDIDmDIWJgCIMQA
