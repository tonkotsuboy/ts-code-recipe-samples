function greet(name = "ゲスト", age = 30) {
  console.log(`こんにちは、${name}さん（${age}歳）`);
}

greet(); // こんにちは、ゲストさん（30歳）
greet("太郎"); // こんにちは、太郎さん（30歳）
greet("太郎", 25); // こんにちは、太郎さん（25歳）

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99&filetype=js&checkJs=false#code/GYVwdgxgLglg9mABAcwE4FN1QBRgIYC26iAvIgESBNDIJ0MgEwzkA0ieyxZAzAAwCUiA3gChEiCAgDOcADboAdJLjJsAA0DKDIGSGQNYMgQwZA9gyBABgAkffEQC+gVQY1gCH+jLdKcDO1oEh-pdwDcA0wIFpMOd4gA9IGI6tr6NLSWVlzOPhhY2OSAVJqAcwnkAcGhmrp6adGxTvF+SWmMiABMAKyZIWG5+dbVzkA
