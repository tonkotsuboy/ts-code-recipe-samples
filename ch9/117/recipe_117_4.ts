type User = {
  name: string;
  age: number;
};

const user: User = {
  name: "鈴木",
  age: 24,
} as const; // as constより型注釈が優先される

// user.nameはstring型、user.ageはnumber型
