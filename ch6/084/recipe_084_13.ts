function greet(name = "ゲスト", age: number) {
  console.log(`こんにちは、${name}さん（${age}歳）`);
}

greet(20); // コンパイルエラー
greet(undefined, 20); // OK

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3#code/GYVwdgxgLglg9mABAcwE4FN1QBRgIYC26iAvIgESBNDIJ0MgEwzkA0iey6AXImCAQEbqoBKRAG8AUIkQQEAZzgAbdADo5cZNgAGgZQZAyQyBrBkCGDIHsGQIAMAEmH4iAX0CqDNsAQ-+ZborgZ2tAkP-qBAblFXRomiYOABMAAw+iAD0UYiAzQyAzwyAiwyAJQyA1wyAFQyAlwyAPwyBGFjY4AAm6MAwYOjFTOGRMYgA8gDSQA
