class MyClass {
  #myBrand;

  static check(object) {
    object.#myBrand;
  }
}

const myInstance = new MyClass();
MyClass.check(myInstance); // OK

const foo = {
  name: "鈴木",
};

try {
  MyClass.check(foo); // 例外をスロー
} catch (error) {
  console.log("例外が発生しました:", error);
}

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&filetype=js&checkJs=false#code/MYGwhgzhAECyCeBhcVoG8BQ1oGIC28AQgE5gB2AJgNwZbQQAuYDAlsNMABYCmwA1gAoA9gCMAVrwYBKdHWyiJwBgDp8RUpRrYAvhl0ZgQso2gEAksaZlg3aAF5oZbgHc4SFBAFSaCZJAjKXLyC5pbkNt7QAPRR0ADyANK0hpbQAGZCQvay2GRgeNwAXNAARIAsSYAU5iUANHo0GAzE8DluflCBPPwCGUKRMdCA0fKAaJqASQyAnQyAtwyAPwx6HMxc0ALcxMRCxDKY2CkQQiDcyiBCAOYCJcOAMgyAXm6A+K6A6gyAfgy3gPoMhTXQy6vrNNpAA
