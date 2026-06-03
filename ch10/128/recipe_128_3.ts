const mySymbol = Symbol("foo");

type SymbolKeyRecord = Record<symbol, string>;

const symbolTable: SymbolKeyRecord = {
  [mySymbol]: "シンボル経由で格納した値",
};

const value = symbolTable[mySymbol]; // "シンボル経由で格納した値"
console.log(value);

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3#code/MYewdgzgLgBAtgTwMoLgIxAGxgXhi9LACgCIAzEEEgSgG4AoeqBABwFN9UNMBpNhAEptQAJwAmuGENFiAPBC5YANDGgiAlmADmAPgb1QkWAsKYAKgEM0mNgC5OpvoOEhxkgN70YMANqIC3AC69iSA7QyAzwyAOwyA1wyAMr6AjK6A5gyAPBaAsL6A6gyA+gyAJAokSvQAvvqG0DAAbhaYAK4ceCbcltZsfsiKmIG0MAD0XTBhUXFJaVm5BuAQWGwAdJggWkQV1Wx0QA
