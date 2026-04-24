type ElementType<T> = T extends (infer U)[] ? U : T;

type C = ElementType<boolean>; // boolean
