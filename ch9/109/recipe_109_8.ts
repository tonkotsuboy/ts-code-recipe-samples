function processValue(value: string | number) {
  if (typeof value === "string") {
    // この中ではvalueがstring型に絞り込まれている
    console.log(value.toUpperCase());
  } else {
    // この中ではvalueがnumber型に絞り込まれている
    console.log(value.toFixed(2));
  }
}

processValue("hello"); // HELLO
processValue(3.14159); // 3.14

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/GYVwdgxgLglg9mABABwE5wgUwM7YGoCGANiJgBQBuxpAXItlKjGAOaIA+iYIAtgEaZUASkQBvAFCJEMYIjJQAnskxxZVEpkQBeHYgBEDJqz0iJUqQHoLiQMoMgOwZAtHKBzBkD2DOtKAZBkPMWgaPVA1gyAer6AUQyAPfGAfgyAMQyAZgyAIgyA0QyS5hAI2HBEmAB0RHAslNRZUHAAqsjKqADCBNjkQkIA3EkAvoiYRDViSZbW9s5uBR7c-IIBIRExCV2IKWBpGdm5+RqZRQBiMAAemAAmZABMdY1STeIn4mgYOPgFZHoAFm05JvWIVogAEgCiADLfAPLndBYXCEDRkADMmQAjAAWKEAVgAnA1XtZIbCgA
