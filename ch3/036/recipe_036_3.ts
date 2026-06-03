type MyType<T, U> = {
  a: T;
  b: U;
};

const obj: MyType<boolean, string> = {
  a: true,
  b: 42, // エラー
};

// ブラウザ上で編集できます
// https://www.typescriptlang.org/play/?ts=6.0.3#code/C4TwDgpgBAsiAq4IB54BooFUB8UC8UA3gFBRQCGAXFPANylQBG1m9AvvcQMYD2AdgGdgUHowBW1OIkjJGPHgBsI5PhiEAnAJZ8A5rgIkyVKMHUBXCGgbMoAFgBMGAPROogCoZAlwyAfhmIcgA
