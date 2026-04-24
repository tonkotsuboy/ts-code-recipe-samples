// 初期値を使う場合
function greet1(name: string = "ゲスト") {
  console.log(`こんにちは、${name}さん`);
}

// オプショナル引数を使う場合
function greet2(name?: string) {
  console.log(`こんにちは、${name ?? "ゲスト"}さん`);
}

greet1(); // こんにちは、ゲストさん
greet2(); // こんにちは、ゲストさん
