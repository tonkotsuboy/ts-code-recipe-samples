function greet({ name }: { name: string }) {
  console.log(`こんにちは、${name}さん！`);
}

greet({ name: "田中" }); // こんにちは、田中さん！
