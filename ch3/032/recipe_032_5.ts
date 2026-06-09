interface Animal {
  name: string;
  walk(): void;
}

class MyAnimal3 implements Animal {
  name: number; // string型であるべきところがnumber型になっている
  constructor(name: number) {
    this.name = name;
  }
  walk(): void {
    console.log(`この動物は歩いています。`);
  }
}

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/JYOwLgpgTgZghgYwgAgIImAWzgG2QbwChlkQ5MIAuZAZzClAHMBuY5Ad1wGsAKASmoA3APbAAJqwC+hQghxwaNZAFkAnuiy4AzMiwAHHBArglG7HiIkyFaiACumAEbRmyAPRva9JoGj1QOYMgEIMgNEMgJ4MgLIMgBYMgMoMgLEMgDIM9k7QPoDWDIBWDIDGDIBmDIAiDEFsCMIgdFB2CGDCUDzWVKQOzlB8BGwkYAAWwDQAdDXIALyk5BCsJNIknDi8Asgi4s0kJIXFwoZdOMKMPAAGUYB2DICrSoCWToD2DICW1jm5gH4MgJoMgEAMW3wjyNKSQA
