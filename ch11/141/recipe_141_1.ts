class ValidationError extends Error {
  constructor(message: string) {
    super(message); // 親クラスのErrorにメッセージを渡す
    this.name = "ValidationError"; // エラーの種類を設定
  }
}

function validateAge(age: number) {
  if (age < 0 || age > 120) {
    throw new ValidationError("年齢は0以上120以下である必要があります");
  }
  console.log(`年齢は ${age} 歳です`);
}

try {
  validateAge(25); // 年齢は 25 歳です
} catch (error) {
  console.error(error);
}

try {
  validateAge(-1); // ValidationError: 年齢は0以上120以下である必要があります
} catch (error) {
  console.error(error);
}

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3#code/MYGwhgzhAEBqYgJYBMwBdEHsB2BRATvpvtAKYAeap2yMBRJA3gFDTTA4Rr4CuwaxABQBbUlDABzUgC5oXfImwSAlNBZs2EHgAdS+EWIiTSygNzQA9BeiAqyMD1DIEuGQJ0MgOwZ6xQNYMgQ4ZAwwyBuhkAfhkAOhkAkhkBCO0BNBlYNNAALRAgAOmwwUWgAXmgAIngkVAwcd3ws8ytoQAqGBwCXQDovQD0MkMBaKMAs7WiAX2YO5gAzHmx+LGxoADcEFHRSAEEpQWNZbB5hACM9VXVoRG7oWaloAB5oAAZoAB8T6GNoAD5oAEYAJkO16LY4ogB3aGxST9zxgrwhCEWUALnqAI3zAPYMh0Ap3KAKDkHjDANBygHMGQBCDIBohkAo-qAQMjADIMqMAUQyAPwYIlkzO1ohxsBBMCBSIkQJgJIIAAbgiHQAAkjGMbWggGdrZERFnkrrcACeamiozyE2mpEE9wArGZLNZ2dBlQKhZ12OhgLFtnoGM82FSaXTEsahNb8KLmMwJVK2DL-lMZgBaW6qsp-fKDIqydkw+GPaEojE4-HEqJ84D6w2CW2m9icWn021JoF20ydIA
