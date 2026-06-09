abstract class Shape {
  abstract calculateArea(): number; // 抽象メソッド

  describe(): void {
    console.log("これは図形です。");
  }
}

class Circle extends Shape {
  constructor(public radius: number) {
    super();
  }

  calculateArea(): number {
    return Math.PI * this.radius ** 2;
  }
}

const circle = new Circle(5);
circle.describe();
console.log(circle.calculateArea());
// これは図形です。
// 78.53981633974483

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/IYIwzgLgTsDGEAJYBthjAgygC2ABwFMEBvAKAQVEhniWGVgFdUICBBKA4ACgEoAuBADtGAWxAEoAbgQB6WQkC9RoEMYwIcMgXoZAwwyBJhlLkEAEwJhYUAJYS+ggG4B7MwZL6KsW0LC3kBAHTJbAc24AIkBlBkAYhkB7BkBntUAjfUBzBkBNBkAgBiDeKX0AX1Is0hQ0DABhMygUIgIAD1YhAwwcfCIyFzdqRnhbKG48RhBkM1gEGAMzRjBBEXFJXicKCjBGQg60zL0XeiYWdk4eAWExCShpmc4IRighBABZYAhsbwAFAEkEACoEG7Mwb0HhjGfXgCZ0hQsjlXO5ELBiqUEABeYQEADuCCKJS83AArEtIaifEYTOZLFjmp4fH5AtjSt5YGtmNdNlw+Et5AhwtF4slSMyAOwADm86IAzABOHkARgAbALhVyACwynkCoA
