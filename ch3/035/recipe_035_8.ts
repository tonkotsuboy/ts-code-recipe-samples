type MyObject<T> = { foo: T };

const obj: MyObject<string> = { foo: "hello" };
const obj2: MyObject<number> = { foo: 123 };

// ブラウザ上で編集できます
// https://www.typescriptlang.org/play/?ts=6.0.3#code/C4TwDgpgBAsiDyAjAVhAxsAPAFQHxQF4oBvKAMwHsKAuKbKAXwG4AoFtCgOwGdgoKUtOElQZMvAE4BLTgHN8RUpRpQARAAsIAGy0VVjVhx58ByAExCEKdFk4BXALaIIEhSXJVaARjMBmA0A
