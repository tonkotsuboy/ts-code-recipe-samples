class Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

class Student extends Person {
  grade: number;

  constructor(name: string, grade: number) {
    super(name);
    this.grade = grade;
  }
}

const student = new Student("田中", 3);
console.log(student.name); // 田中
console.log(student.grade); // 3

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3#code/MYGwhgzhAEAKCmAnCB7AdtA3gKGtNYAtvAFzQQAuiAlmgOYDc2u0w6liArsBSogBQFiZDrToBKLCzwUAFtQgA6IfGgBefEXhM8AX2z7soSDADKFTgBN4aCtHgAPCjcswEydFLx1EYa2TROQgAjJCYWNjQObl4BFREqMQAaaB8-Unwg0MRJHDw8CE4AByRBLXEdfLkFRTTrdVTfa0r9Q0jKcgtrWwa0eAB3aHMrGwp+ACJABldAWjlxlIBmCqN2FBB4RRAUOn5KEdtlcoZoAHpj6BnlqNX1ze3d7opapvgKk7P5oA
