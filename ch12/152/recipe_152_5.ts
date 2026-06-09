class Counter {
  accessor value = 1;

  increment(): void {
    this.value += 1;
  }
}

const c = new Counter();
console.log(c.value); // 出力: 1
c.increment();
console.log(c.value); // 出力: 2

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/MYGwhgzhAEDCD2BXAdgFwKYCdoG8BQ00Yww6U82AbmCIutALzQCMA3HgdAJbLCboBbdGgAUASgBc0SvC4ATXJ0KoAFlwgA6arXoBqJm04BfPCbzB4yCKmjBG0ZOgDucJGizj2Fq-BDoNIPAA5iLAWjR0YqzQAPQx0IBfioDZSlLM5ho8fILCqJ7mlhC+-oEhYdqR0XGJKdAATEA
