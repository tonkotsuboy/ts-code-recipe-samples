type User = {
  name: string;
  age?: number;
};

// OK
const user1: User = {
  name: "鈴木",
};

// NG
const user2: User = {
  name: "鈴木",
  age: undefined,
  // エラー: Type 'undefined' is not assignable to type 'number'
};
