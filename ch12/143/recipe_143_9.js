class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
}

const user = new User("田中太郎", "tanaka@example.com");
console.log(user.name); // 出力: 田中太郎
console.log(user.email); // 出力: tanaka@example.com

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99&filetype=js&checkJs=false#code/MYGwhgzhAECqEFMBO0DeAoa1gHsB2EALkgK7CE5IAUeYAtggDTQJ1gCWIAlGpltIQAW7CADpaDaAF5oEhAG4+WISNGsOIaSzadFWAL7pD6XAULQSiFDLwIA7nCtUARIAZXQLRygKk1AcwnPmzwjBaAGswAAEEAA96AAcQBFFcOmcuRVMIHHjREBwAcypLZHF6BFToAHpy6EAvxUBspQAuaA8fE3wMrJz8wqQ1HW55Cqq6xsCQ8KjYrKSgA
