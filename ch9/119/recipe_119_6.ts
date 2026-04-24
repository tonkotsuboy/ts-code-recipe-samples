type MyParameters<T>
  = T extends (...args: infer P) => any ? P : never;

type A
  = MyParameters<(name: string, age: number, active: boolean) => void>;
// [name: string, age: number, active: boolean]
