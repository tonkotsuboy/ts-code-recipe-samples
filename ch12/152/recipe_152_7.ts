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
user.id = 456; // コンパイルエラー

// ブラウザ上で編集できます
// https://www.typescriptlang.org/play/?ts=6.0.3#code/MYGwhgzhAECqEFMBO0DeAoa0AOSCWAbmAC4LQD6eAJgFzQB2ArgLYBGyA3OptMAPb0IxJI2DE+SABTU6TNsgCUaHlmIALPBAB0lKtAC80alywBfblgDmCYkaqSFsluxQYsWJDcZJ60dZp1jHnNzdH5BW0ZEFEN6BAB3OGjJAEYAJgBmBS4o5C1qA2gAFgBWADYOaAB6KuhAZoZAZ4ZARYZAEoZAa4ZACoZAS4ZAH4YgA
