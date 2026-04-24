class Human {
  constructor(name: string, age: number) {
    // コンストラクターの処理
    console.log(name, age);
  }
}

type HumanParams = ConstructorParameters<typeof Human>;

const params: HumanParams = ["鈴木", 30];
new Human(...params);
