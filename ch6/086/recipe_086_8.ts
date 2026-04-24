type StringToNumber = (text: string) => number;

function createParser(radix: number): StringToNumber {
  return (text) => parseInt(text, radix);
}

const parseHex = createParser(16);
console.log(parseHex("FF")); // 255
