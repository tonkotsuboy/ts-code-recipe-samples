// エラー: A required parameter cannot follow an optional parameter
function greet(name?: string, greeting: string): void {
  console.log(`${greeting}、${name}さん`);
}

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/PTAEgqGRLhkH4YC5QIKgE4FMCOBXAlmgJqAA4CGyxAtqgC6rKgDGxAdkwPZWgBmrANj6wHdQzUK0JVsrJsR5FSFarQBQnTE3oSpoAOZpqACmmUA-PADOVZNibaANDr0Sb5y9e0BKeADdW2AgG8lUAYpM15UADp+bX0AAwASf11UajcAX0BABkSjVDTAVQZAZIZY9wBuJTSgA
