interface Animal {
  name: string;
  walk(): void;
}

class MyAnimal2 implements Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  // walkメソッドがないためエラー
}

// ブラウザ上で編集できます
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/JYOwLgpgTgZghgYwgAgIImAWzgG2QbwChlkQ5MIAuZAZzClAHMBuY5Ad1wGsAKASmoA3APbAAJqwC+hQghxwaNZAFkAnuiy4ATMiwAHHBArglG7HiIkyFanQYgWbBMJB2ArgjDCoPa1Vr0THwEbCRgABbANAB0fsgAvKTkEKwk0iQA9Bkc3ICHDIC9DIDDDICTDIAyDIBWDIAiDID6DICBDIAVDICXDIA-DISSQA
