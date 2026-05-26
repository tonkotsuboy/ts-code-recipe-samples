function greet(user: { name: string }) {
  console.log(`こんにちは、${user.name}さん！`);
}

greet({ name: "田中" }); // こんにちは、田中さん！
