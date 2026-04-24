type ElementType<T> = T extends (infer U)[] ? U : T;

type A = ElementType<number[]>; // number
