type IsNumber<T> = T extends number ? true : false;

type A = IsNumber<number>; // true
type B = IsNumber<string>; // false
