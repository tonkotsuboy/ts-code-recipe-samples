const user = { name: "鈴木", age: 30 } as const;
// { readonly name: "鈴木"; readonly age: 30 } 型に推論される
// user.name = "田中"; // エラー：readonlyなプロパティは書き換えができない
