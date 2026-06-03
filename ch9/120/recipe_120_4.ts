type User = {
  id: number;
  name: string;
  age: number;
};

// すべてのプロパティをオプショナルに変換
type PartialUser = {
  [K in keyof User]?: User[K];
};
// { id?: number; name?: string; age?: number; }

// 一部のプロパティだけ指定できる
const updateData: PartialUser = {
  name: "田中", // idとageは省略可能
};

// ブラウザ上で編集できます
// https://www.typescriptlang.org/play/?ts=6.0.3#code/C4TwDgpgBAqgzhATlAvFA3gKClAlgEwC4oA7AVwFsAjJAbm1IEMKJi5hFcSBzenR7q1KUaiegF96mAPTSogTQZAngyAzBkB2DIHWGQLcMgRYZAYwyBihkBJDICqGdYHaGQOcMgKYZA1wyBrBkCQmoG3jTKEhQACo0TBcjADbwSKgYDADaANJ4JFAA1hAgAPYAZrAIiAC6APzEQYiRGRL0shh4+DnC1HRMLBXsnDy0UAIQFeRVYlDimDJygABygBcJGjoGgAYMgIoMgODGgFnagOYMgLIMgNEMmADGiSTsUGRg+IzAEAAie4zEXj5+gekhWDgkzEIARIAMroC0cg8ANFAlBIAWDC2A9gyAQHdAKaugHvlQC-AZhJEA
