const person: {
  name: string;
  greet(name: string): void;
} = {
  name: "鈴木",
  greet(name) {
    console.log(`こんにちは、${name}さん`);
  },
};

person.greet("太郎"); // こんにちは、太郎さん
