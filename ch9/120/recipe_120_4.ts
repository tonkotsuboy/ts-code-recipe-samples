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
