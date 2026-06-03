class User {
  constructor(
    public name: string,
    public age: number,
  ) {}
}

function createUser(name: string, age: number): User {
  return new User(name, age);
}

console.log(createUser("鈴木", 30));

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3#code/MYGwhgzhAECqEFMBO0DeAoa1gHsB2EALkgK7CE5IAUmW0ADiQEYgCWw0eYAtggFzQiSVngDmAGlpZGLdtDCj+nEtybJJWAJRoAvuj3oAZiTzlW+bEgRhCCeMipdeAoSInzFAvCrVJNA+xQMLCtCEiQ8TgQAdzhEaicEcQ8ETQBufXR0XAIcEAQAOhAcUSpgKxs7eKoAIkAWJMAKcxrkgGYABk10oA
