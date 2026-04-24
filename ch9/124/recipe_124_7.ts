const user = {
  name: "鈴木",
  age: 24,
} satisfies {
  name: string;
  age: number;
};
