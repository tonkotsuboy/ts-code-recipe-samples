const greet = (name = "ゲスト") => {
  console.log(`こんにちは、${name}さん`);
};

greet(); // 出力: こんにちは、ゲストさん
greet("太郎"); // 出力: こんにちは、太郎さん

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&filetype=js&checkJs=false#code/MYewdgzgLgBA5gJwKZNgXhgCjAQwLZIwYBEgTQyCdDIBMMxAlEQHwwDeAUDDKJCADZIB03EHEwADQMoMgZIZA1gyBDBkD2DIEAGACRNcBAL6BVBgkiaAbhbqDLRCiiZ9MAPRWYgL8VA2UoAuGJNmKKlbSeSpMxQCpNQDmE2j1rW0cXN3kFYO0gA
