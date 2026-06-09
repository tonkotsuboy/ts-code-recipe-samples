class User {
  private _age: number = 0;

  get age(): number {
    return this._age;
  }

  set age(value: number) {
    if (value < 0) {
      throw new Error("年齢は負の値にできません");
    }
    this._age = value;
  }
}

const user = new User();
user.age = 25;
console.log(user.age); // 出力: 25
// user.age = -5; // エラー: 年齢は負の値にできません

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/MYGwhgzhAECqEFMBO0DeAoa0AOSCWAbmAC4LQD6YA5ggFzQB2ArgLYBGy0AvNAAwDc6TNBrFo1BAAoAlPWbtOGLFiQJiTJA2jEAFnggA6SjUFYAvkKyIxEyURBM6jVhyTS0wrHgBm0O2AcyAB4+dyVlLF0kAHsAd0YEeIBRJBikSQAiQBc9QCN8wHsGQAKYwDsGQBIFQGsGQHMGQFkGQD8GQG0GQGSGDOlTZQsI3X0jCW5oe0dWiwt0YGiGCDEmRBQeBkS4aZlBKeQDHp4AJgBWQVHx6JAEAxBoqkkVpDWaFugAelvoQC-FQGylem30e+gLq7IeAFodncHoAKhkAlwyAH4Z6LlCqVKrVGkA
