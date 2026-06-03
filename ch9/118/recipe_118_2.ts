type OnlyString<T> = T extends string ? T : never;

type A = OnlyString<"hello">; // 'hello'
type B = OnlyString<string>; // string

// ブラウザ上で編集できます
// https://www.typescriptlang.org/play/?ts=6.0.3#code/C4TwDgpgBA8gdgGxAZWAJwJZwOYB4AqAfFALxT5QQAewEcAJgM5SPpbZQD85UAXFHAgA3CGgDcAKAmhIUAIKlYiFGxy4ARAAsICBAHt1hMVAD0JqAHJtuvRenhoAIUXwkqTGtYfsR0+a-sQA
