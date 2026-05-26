const user = {
  name: "鈴木",
  age: "24", // × Type 'string' is not assignable to type 'number'
} satisfies {
  name: string;
  age: number;
};
