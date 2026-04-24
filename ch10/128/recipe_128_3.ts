const mySymbol = Symbol("foo");

type SymbolKeyRecord = Record<symbol, string>;

const symbolTable: SymbolKeyRecord = {
  [mySymbol]: "シンボル経由で格納した値",
};

const value = symbolTable[mySymbol]; // "シンボル経由で格納した値"
console.log(value);
