type A = {
  name: string;
  age: number;
};

type B = {
  age: string;
};

type C = A & B;

// ブラウザ上で編集できます
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/C4TwDgpgBAglC8UDeAoKUB2BDAthAXFAM7ABOAlhgOYDcaUWVBmArjgEYSl0C+dKoSFABCCZPUbMSFar36DoAYTFwAZCJpA
