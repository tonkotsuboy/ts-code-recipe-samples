type ErrorParams = ConstructorParameters<typeof Error>;
// [message?: string]

const args: ErrorParams = ["Something went wrong"];
const err = new Error(...args);
console.log(err.message);

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3#code/C4TwDgpgBAogTnA9nACgQzmgtgZygXigGFEA7HYOAVwGNhl1MsJgI4cAeUSRAM1gTIAfAG4AUAHoJUANrMcONAHMIAfgBcUCnACWpJQF0xYmmQpQMSnJvhJUGbHkIyARAGVEzYAAs9SqADuEKTAgUj6LgbipuShbHAEUKQQAQJ2ABQAdNmWOACU0WaIADYQmcWISunxmfKKKgVAA
