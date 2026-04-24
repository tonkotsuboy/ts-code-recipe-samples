type IsArray<T> = T extends any[] ? true : false;

type A = IsArray<string[]>; // true
type B = IsArray<number[]>; // true
type C = IsArray<string>; // false
type D = IsArray<boolean>; // false
