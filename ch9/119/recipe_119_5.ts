type FirstArgumentType<T>
  = T extends (arg: infer U, ...args: any[]) => any
  ? U
  : never;

type D = FirstArgumentType<(name: string, age: number) => void>;
// string
type E = FirstArgumentType<(isActive: boolean) => string>;
// boolean
