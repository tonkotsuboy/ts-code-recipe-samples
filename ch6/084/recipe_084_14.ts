function greet(name = "ゲスト", age: number) {
  console.log(`こんにちは、${name}さん（${age}歳）`);
}

greet(undefined, 20); // 出力: こんにちは、ゲストさん（20歳）

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/GYVwdgxgLglg9mABAcwE4FN1QBRgIYC26iAvIgESBNDIJ0MgEwzkA0iey6AXImCAQEbqoBKRAG8AUIkQQEAZzgAbdADo5cZNgAGgZQZAyQyBrBkCGDIHsGQIAMAEmH4iAX0CqDNsAQ-+ZborgZ2tAkP-qBAblFXRomiYOOAAJujAMGDooUwATAAMPogA9CmIgF+KgNlKHDoGJjS0dvaJHkA
