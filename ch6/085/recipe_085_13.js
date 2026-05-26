function greet(greeting, ...names) {
  for (const name of names) {
    console.log(`${greeting}, ${name}!`);
  }
}

greet("こんにちは", "鈴木さん", "田中さん", "佐藤さん");
// こんにちは, 鈴木さん!
// こんにちは, 田中さん!
// こんにちは, 佐藤さん!
