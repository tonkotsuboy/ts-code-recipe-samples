interface Loggable {
  log(): void;
}

interface Serializable {
  serialize(): string;
}

interface ErrorReport extends Loggable, Serializable {
  errorCode: number;
  message: string;
}

const error: ErrorReport = {
  errorCode: 500,
  message: "内部エラーが発生しました",
  log: () => console.error("エラーが発生しました"),
  serialize: () =>
    JSON.stringify({ errorCode: 500, message: "内部エラーが発生しました" }),
};

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3#code/JYOwLgpgTgZghgYwgAgDIHsDmm4CMA2KA3gFDLL5YAUAlAFzIBu6wAJgNwkC+JJoksRCgDK0YHHzAAXnkLJS5AM5iJ0iLQaKwUUJk48+4aPCTIAolCjooAJQgAHa2GQQAHpBCtFaLDgIQAGmRRHVUZf3kyF0trAGF0VggGEABXAFtcaE5yNIhFRThMJOQtHRA9bl4EdBAtaKsoBgsGu0coZwBeSPJoBvjEhgBWAAZhgKjc-MLigCJAUMVAC4TACoZAS4ZAH4ZAGQZALzdAfFdAdQZAPwY9wH0GGfHySkwGWmQOgD5katr0QgA6XusqGdXN3cOTmY0c4lFSSKTFG73KLkABSwgA8gA5V6lXTAGAATyoRHqcQSxRGY2QkwKRQY82W622+yOp2QXCB3HYQA
