class IdGenerator {
  static prefix: string;
  static #seed: number;

  static {
    this.prefix = "GEN";
    this.#seed = Date.now();
  }

  static next(): string {
    return `${this.prefix}-${this.#seed++}`;
  }
}

console.log(IdGenerator.next()); // 例：GEN-1700000000000
console.log(IdGenerator.next()); // 例：GEN-1700000000001

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/MYGwhgzhAECSAmBxApgO2QJzAFwPYegG8AoaaCbHAS2GgAcNkAzKgDwC5zsMrUBzANyku1WgGIIyZPE6oArgFsARpiHCKoosLLYAFlQgA6BszbQAvNABEiAKIA5K0LI79RiVPgXoAERzJDVFwAdwAKAEpnaABfYnVKbBpodFZsCM4KHn4tF2hGbDkMVGgAAwASQj0DY0YWVmiAWgqq90lpAGp26JKo2NjiYFxUCFwQAJBcPlCEFHQsPAxA5FSIyOgAenXoQGj5QCx-u3sGgEYAdgAGC8urs4GhkbHDCamZtEwcfCWV8LXNnf2HY7na5XI5AA
