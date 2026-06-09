class User {
  constructor(
    public name: string,
    public age: number,
  ) {}
}

type UserInstance = InstanceType<typeof User>;
// UserInstance は User 型（{ name: string; age: number } を持つインスタンス型）

const user: UserInstance = new User("鈴木", 30); // OK
console.log(user);

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/MYGwhgzhAECqEFMBO0DeAoa1gHsB2EALkgK7CE5IAUmW0ADiQEYgCWw0eYAtggFzQiSVngDmAGlpZGLdtDCj+nEtybJJWAJRoAvuj3pCAT3oI4iJAEkChMHmBmAvNGtE7DgComEAHmOmcADNzZAA+AG50AHookKsbdzNAewY46EBo9UAIf9ROHiUhEVFw+UUBPBU1FB1oQCSGQEBjQBMGQBKGQGeGQE6GQH6GNrTASH-0dFwbaBILAXhkV1t7J04EAHc4qgAiQBYkwApzRfFoAGYABk0imOgAeQBpfvwIHBAEADoQHFEqYeR9oA
