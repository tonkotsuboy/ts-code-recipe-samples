type A = {
  name: string;
};
type B = {
  age: number;
};
type Person = A & B;

// ageがないのでエラー
const a: Person = {
  name: "太郎",
};

// nameがないのでエラー
const b: Person = {
  age: 18,
};

// ブラウザ上で編集できます
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/C4TwDgpgBAglC8UDeAoKUB2BDAthAXFAM7ABOAlhgOYDcKAvnaJFAEILJpRZUGYCuOAEYRSdRimbQACqKIB7DBzgAyNnRQB6Td16AZBkBWDIBEGQHYMgcwZAFQyBLhkA-DCgDGikt0KzSCpYlTpseQgCJAKk1AOYT-ABoGDW1MXAhDU0tbBydgKCFXOUUOb10+AEYADgjGIA
