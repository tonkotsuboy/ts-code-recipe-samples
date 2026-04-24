// プロパティの初期値を設定しない場合の挙動を示します。
class Person {
  name;
  age;
}

const person = new Person();
console.log(person.name); // 出力: undefined
console.log(person.age); // 出力: undefined
