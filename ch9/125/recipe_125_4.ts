type ConvertToNumberArray<T> = T extends number[] ? string[] : T;

type A = ConvertToNumberArray<number[]>; // string[]
type B = ConvertToNumberArray<number>; // number
