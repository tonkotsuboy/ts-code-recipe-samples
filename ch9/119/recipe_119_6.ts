type MyParameters<T>
  = T extends (...args: infer P) => any ? P : never;

type A
  = MyParameters<(name: string, age: number, active: boolean) => void>;
// [name: string, age: number, active: boolean]

// ブラウザ上で編集できます
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/C4TwDgpgBAsiAKBDATogthYFkGcA8AKgHwBQUUAvFAVBAB5YB2AJjlABQB03KA5jgC4oAS0YAzbFHgBKSkSiJGIKAH4pUIYwgA3bAG4SJUJCgBBMpVgIU6TNnztGtoTmDJRvADQLeETQFc0ACNsb0QAY2BhXSEggHs4gBsIRVkKeW044WYiAwB6PKgAbScMFzcPMN8A4NCFSOi-KHiklMYAXSA
