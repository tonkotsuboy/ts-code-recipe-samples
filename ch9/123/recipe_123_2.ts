// このファイルは末尾に意図的なコンパイルエラーデモを含みます（TS2345）。
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

type User = {
  id: number;
  name: string;
  age: number;
};

const user: User = {
  id: 1,
  name: "鈴木",
  age: 30,
};

const userName: string = getProperty(user, "name");
console.log(userName); // "鈴木"

const userAge: number = getProperty(user, "age");
console.log(userAge); // 30

// エラー: Argument of type '"zip"' is not assignable to parameter
// of type 'keyof User'.
const userZip = getProperty(user, "zip");
