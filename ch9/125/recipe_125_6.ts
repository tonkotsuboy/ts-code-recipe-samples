type IsArray<T> = T extends any[] ? true : false;

type X = IsArray<string | number[]>; // false | true

// ブラウザ上で編集できます
// https://www.typescriptlang.org/play/?ts=6.0.3#code/C4TwDgpgBAkgzgQQE5IIYgDwBUB8UC8UWUEAHsBAHYAmcUqlIA2gLpQD8UwSArtAFxQAZqgA2cCAG4AUNNCQoADQKxEKdBjjcAlpQDmUAD5RKPALYAjCElY5JUAPQPhYiUa68IQA
