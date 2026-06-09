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

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/PTAElwlR8c0EgVCSGR-eUGIMgWDUBAqAoAZgVwHYGMAXASwHtdQBzAJwFNbCBGAClwEMBbWgLlAGdC1YrkqgAvKABEgJoZAnQyAJhkkBKUAG90oUPnJ9SAG1oA6PaUrMABoGUGQMkMgawZAhgyB7BkCADABJV7LgF9AqgzXzSgDc6F7o6CCggFUMgOsMgO0MgOcMgFMMgNcMgKj6gA6mCCgYOAQk5FR0DABMrJy0APy8AkIiKuqa2ri6BsamFjYOLu6etKAVFVJyir7+QSFhNPRMzEGgEZ1OzsN+6FMls4HzYIsuK9ZAA
