interface Animal {
  name: string;
  walk(): void;
}

class MyAnimal implements Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  walk(): void {
    console.log(`${this.name}は歩いています。`);
  }
}

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3#code/JYOwLgpgTgZghgYwgAgIImAWzgG2QbwChlkQ5MIAuZAZzClAHMBuY5Ad1wGsAKASmoA3APbAAJqwC+hQghxwaNZAFkAnuiy5kWAA44IFcEo3Y8REmQrU6DECzYJhIGwFcEYYVB6Wqtekz4CNhIwAAtgGgA6H2QAXlJyCFYSaRJOHF4BZBFxIJISR2dhfUicYUYeAAMAEnwwiOjEyUB7BkBLa0ARBkAzBnbAPwZATQZAIAZKvmTkaUkgA
