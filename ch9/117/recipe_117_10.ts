const user = {
  name: 123, // × Type 'number' is not assignable to type 'string'
  age: 24,
} as const satisfies {
  name: string;
  age: number;
};
