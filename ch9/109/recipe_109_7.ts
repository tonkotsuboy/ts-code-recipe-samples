class User {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

const user = new User("佐藤");
console.log(typeof user); // "object"

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3#code/MYGwhgzhAECqEFMBO0DeAoa0B2YC2CAXNBAC5ICW2A5gNybTAD22ZSArsKU0gBS4FibKtQCUaBllIALChAB0AhNAC8OfAnpYAvul3pmrUtHaIUa7AgDucM7wBEgBXlAJ6H3R9QxCYgE8kE2peUgBPAAcEJgAzEzN3aAB6eOh7JgAjACsELnsgA
