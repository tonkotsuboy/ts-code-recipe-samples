type OnlyString<T> = T extends string ? T : never;

type C = OnlyString<number>; // never

const c: C = 10;
// Error: Type '10' is not assignable to type 'never'.
