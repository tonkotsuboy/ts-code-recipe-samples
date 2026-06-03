type FirstArgumentType<T>
  = T extends (arg: infer U, ...args: any[]) => any
  ? U
  : never;

type D = FirstArgumentType<(name: string, age: number) => void>;
// string
type E = FirstArgumentType<(isActive: boolean) => string>;
// boolean

// ブラウザ上で編集できます
// https://www.typescriptlang.org/play/?ts=6.0.3#code/C4TwDgpgBAYglgJwM7AIIIOYFcC2EB2wAKuBADxEB8AUFFALxRFQQAewBAJklABQCGmAFxQ4+AGYQEUAKoAaKADplgjEhH98IANoBdAJQNKUTSFpQA-LPMj8EAG5SA3NWqhIUACINYiFOmw8QhJIMl58fjwRFAQxDAV+DAhbXAAjKUN6Y3sAezhOShcAeiKoGLi3UigAUR94ZDRMXAJiUjC4JFQAY2A4RxFUnJyAGwhNTONy-AxC6hKoQZGx-CA
