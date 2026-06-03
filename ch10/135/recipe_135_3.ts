type RegExpParams = ConstructorParameters<typeof RegExp>;
// [pattern: string | RegExp, flags?: string | undefined]

const args: RegExpParams = ["^abc", "i"];
const re = new RegExp(...args);
console.log(re.test("ABC"));

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3#code/C4TwDgpgBAShDmBRAHmACgQwE4YLYGcoBeKAYQHsA7fYLAVwGNhytMdcJgIt8AeUSOQBmsBCjAA+ANwAoAPRyoAbTAZgXLJQBcUGlgCWleFAA+opKgA0UIQBsM8fAH4dew8bN1KAEwhDDEN4AujIyDFQ0UNiOOnAW6Nh4hCRKAEQAehgARgyp1qn6qUGy4dTAUFjQJJQQAO7m4gAUAHSt0fgAlCUR5LYQzbbk8I2VzVw0jakAggBCpKkdXUA
