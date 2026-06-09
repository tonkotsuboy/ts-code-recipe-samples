class User {
  constructor(
    public name: string,
    public age: number,
  ) {}
}

type UserConstructorArgs = ConstructorParameters<typeof User>;

function createUser(...args: UserConstructorArgs): User {
  return new User(...args);
}

console.log(createUser("鈴木", 30));

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/MYGwhgzhAECqEFMBO0DeAoa1gHsB2EALkgK7CE5IAUmW0ADiQEYgCWw0eYAtggFzQiSVngDmAGlpZGLdtDCj+nEtybJJWAJRoAvuj3pCAT3oI4iJAGF8QshSQBBJKJgBeaNYLE7lAApgkHgRCZAgAHmNTHAAzc2QAPgBudHRokjxyVnxsJAQwEPhkKgA6UoCXAUKrG29ySicXTUqLNFpcwhIkPE4EAHc46lLi8ohNZINcAhwQBGKQHFEqYFz8hCqqACJAFiTACnMN8WgAZgAGTTGgA
