type MyReturnType<T>
  = T extends (...args: any[]) => infer R ? R : never;

type A = MyReturnType<() => string>; // string
type B = MyReturnType<(x: number) => boolean>; // boolean
type C = MyReturnType<number>; // never（関数ではないため）
