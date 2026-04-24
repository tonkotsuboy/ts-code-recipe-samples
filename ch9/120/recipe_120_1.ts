type User = {
  id: number;
  name: string;
  age: number;
};

type UserKeys = keyof User;
// 'id' | 'name' | 'age'
