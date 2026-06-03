type StringToNumber = (text: string) => number;

function createParser(radix: number): StringToNumber {
  return (text) => parseInt(text, radix);
}

const parseHex = createParser(16);
console.log(parseHex("FF")); // 255

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3#code/C4TwDgpgBAysBOBLAdgcwCoHsByBXAtgEYTxQC8UAFMBAB7ABcUAzgiqgJTkB8UyBxeAG4AUCIBmuZAGNgiTMijT4EAIY0ACqvjMSleKoAmiWk35ESHJnCRoseC6QDeIqFBXBc8RdTrAuZLxg2roAksjAvvQANO5GJhyiAL5i0gqsUME6EAASdORKKuoQWtnwlACMAGyJImnIzJgANhAAdE2YqJRZunm0lABEAGJDAxyJUAD0k1AATACs80A
