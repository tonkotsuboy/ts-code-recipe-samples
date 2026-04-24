type Last<T> = T extends [...any[], infer L] ? L : never;

type A = Last<[string, number, boolean]>; // boolean
type B = Last<[1, 2, 3]>; // 3
