class User {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`こんにちは、${this.name}`);
  }
}

const user = new User("鈴木");
user.greet();

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99&filetype=js&checkJs=false#code/MYGwhgzhAECqEFMBO0DeAoa1gHsB2EALkgK7CE5IAUeYAtggJRqZbSEAWAlhAHS0NoAXmgCEAblYBfdKwDmSBAkJVmGNtnwQcIBLxA45VAAaBlBkDJDIGsGQIYMgewZAgAwASVJx796CKccaSsMmei4BITQJIgoIngIAO5w4VQARIAsSYAU5gk+6GHIvApKKj5AA
