class Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

class Student extends Person {
  grade: number;

  constructor(name: string, grade: number) {
    super(name); // 親クラスのコンストラクターを呼び出す
    this.grade = grade;
  }
}

// 動作確認用（書籍では recipe_145_4.ts 側で呼び出しています）
const student = new Student("田中", 3);
console.log(student.name); // 田中
console.log(student.grade); // 3

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/MYGwhgzhAEAKCmAnCB7AdtA3gKGtNYAtvAFzQQAuiAlmgOYDc2u0w6liArsBSogBQFiZDrToBKLCzwUAFtQgA6IfGgBefEXhM8AX2z7soSDADKFTgBN4aCtHgAPCjcswEydFLx1EYa2TROQgAjJCYWNjQObl4BFREqMQAaaB8-Unwg0MRJHDw8CE4AByRBLXEGaAB6KuhAKsjAeoZAS4ZAToZAOwZAZoZAZ4YWwAmGJobAfoZAH4ZAJIZAHxVAZwZAL8VATQZpaDkFRTTrdVTfax1ofUMa6EBVpUAdeUAuj0BYqMAKV0AIf8APs0BZH0BzBkB7BmhEeGBqEoB9AEYAFgArF8-ooKDBAC4KDym00A6gyAMwZACIMgD8GWaASH+jOw7JQrDY7Bo0PAAO7Qcw42z8ABEgAZXQC0chSUgBmCoYqIoEDwRQgFB0fjY6y2ZTlSr7Wks1Dsznc3kWfkUFabeAVaq1BlAA
