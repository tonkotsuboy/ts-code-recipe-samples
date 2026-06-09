type IsArray<T> = T extends any[] ? true : false;

type A = IsArray<string[]>; // true
type B = IsArray<number[]>; // true
type C = IsArray<string>; // false
type D = IsArray<boolean>; // false

// ブラウザ上で編集できます
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/C4TwDgpgBAkgzgQQE5IIYgDwBUB8UC8UWUEAHsBAHYAmcUqlIA2gLpQD8UwSArtAFxQAZqgA2cCAG4AUNNCQoCArEQp0GONwCWlAOasckqAHpjXXhDnhoAIWXxkaTJR4BbAEYQkBo6fN8rBQBhe1UnDW09QxMzEXFLeWgAEVDHdXcAewzRCAZovziJIA
