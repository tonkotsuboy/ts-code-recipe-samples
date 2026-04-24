type OnlyString<T> = T extends string ? T : never;

type A = OnlyString<"hello">; // 'hello'
type B = OnlyString<string>; // string
