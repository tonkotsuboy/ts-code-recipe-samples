const user = {
  name: "鈴木",
  age: 24,
} as const satisfies {
  name: string;
  age: number;
};

user.name;
// ^? "鈴木"
