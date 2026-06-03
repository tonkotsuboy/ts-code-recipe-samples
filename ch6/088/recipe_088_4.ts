type User = {
  name: string;
  address: {
    city: string;
  };
};

function sayCity({ address: { city } }: User) {
  console.log(`住んでいる街は${city}です`);
}

sayCity({ name: "田中", address: { city: "東京" } }); // 住んでいる街は東京です

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3#code/C4TwDgpgBAqgzhATlAvFA3gKClAdgQwFsIAuKOYRAS1wHMBubKfAExcQjjjKxxwGMqoMhWp1GOAL6NpmTADMArrn7AqAe1zl8IAMJCQACnTM2HLjyiDQUSbbLwkASgxN+muOoA2EAHRf1WkMAA0B5eUBkhkBzBkARBkBohkB1CMB7BgASdGsQSUjATQZgpxk5OB19UGM8IlIoACJABldAWjlKgBpTdk5uDCsDMkrAR3NAGrlK21s8qAB6EagImITEvuygA
