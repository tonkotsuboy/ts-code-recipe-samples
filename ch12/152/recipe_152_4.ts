class Person {
  accessor name: string;

  constructor(name: string) {
    this.name = name;
  }
}

const p = new Person("鈴木");
console.log(p.name); // 出力: 鈴木
p.name = "田中";
console.log(p.name); // 出力: 田中
