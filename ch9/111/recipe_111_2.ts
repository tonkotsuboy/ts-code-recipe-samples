type Foo = {
  foo: string;
};

type Bar = {
  bar: string;
};

const myFunction = (arg: Foo | Bar): void => {
  if ("foo" in arg) {
    console.log(arg.foo); // argはFoo型
  } else {
    console.log(arg.bar); // argはBar型
  }
};
myFunction({ foo: "myFoo" }); // 「myFoo」と出力される
myFunction({ bar: "myBar" }); // 「myBar」と出力される

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3#code/C4TwDgpgBAYg9nKBeKBvAUFKAzBAuKAZ2ACcBLAOwHMBudAXzvVEigCEBDE5NTKAIy4Fi5anUbp0AYzgViUALYgYAVwpTgZWTwAUXKgXiIAPuy4BKAgDc4ZACbIAfLyxlsUHQCJccT1EpQ+uYuWFAycnAANhAAdJFwVHokVDE+5jRQAPSZgcmA9gxGgNHqfPRQEJGE0BihYbKEUbHxifoxgiTpWTn6eZwkxVj0DHRKquqasjqoOPhQniMIfvQd2VCAMAzzcICwDIAWDIBfioDZSoCqDIAxDIDRDOgjahpaFJMCQrNKvYvLOesgvTsHJ6dAA
