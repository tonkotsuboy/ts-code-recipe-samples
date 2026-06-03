class User {
  private _id: number;

  constructor(id: number) {
    this._id = id;
  }

  get id(): number {
    return this._id;
  }
}

const user = new User(123);
console.log(user.id); // 出力: 123

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3#code/MYGwhgzhAECqEFMBO0DeAoa0AOSCWAbmAC4LQD6eAJgFzQB2ArgLYBGyA3OptMAPb0IxJI2DE+SABTU6TNsgCUaHlmIALPBAB0lKtAC80alywBfblgDmCYkaqSFsluxQYsWJDcZJ60dZp1jHnNzdH5BW0ZEFEN6BAB3OGjJAEYAJgBmBS5wiD4QBC0QPktJKOQtamzoAHoa6EAvxUBspTp0jKA
