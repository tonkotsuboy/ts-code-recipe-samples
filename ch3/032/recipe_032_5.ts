// 意図的な型エラーデモ（TS2416/TS2420）。nameがnumber型になっていてinterfaceと不一致
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
