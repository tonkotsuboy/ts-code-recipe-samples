type User = {
  name: string;
  age: number;
};

type UserName = User["name"]; // string
type UserAge = User["age"]; // number
