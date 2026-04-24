type OnlyString<T> = T extends string ? T : never;

type C = OnlyString<number>; // never
