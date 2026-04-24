type ValueOf<T> = T extends { [key: string]: infer V } ? V : never;

type User = { name: string; age: number };
type UserValues = ValueOf<User>; // string | number
