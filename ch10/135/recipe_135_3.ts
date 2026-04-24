type RegExpParams = ConstructorParameters<typeof RegExp>;
// [pattern: string | RegExp, flags?: string | undefined]

const args: RegExpParams = ["^abc", "i"];
const re = new RegExp(...args);
console.log(re.test("ABC"));
