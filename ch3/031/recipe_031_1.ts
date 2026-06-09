type A = {
  name: string;
};

type B = {
  age: number;
};

type Person = A & B;

const person: Person = {
  name: "太郎",
  age: 30,
};

// ブラウザ上で編集できます
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/C4TwDgpgBAglC8UDeAoKUB2BDAthAXFAM7ABOAlhgOYDcKAvnSqJFAEILJpRZUGYBXHACMIpOoxTNw0AApiiAewyc4AMnZMAxspJRIpJRkLzDyzqnTY8hAESAqTUBzCbYA03XvwDMABjeMgA
