// 書籍では recipe_145_3.ts で定義した Person / Student クラスを前提に呼び出しのみを示していますが、
// 単体で動くように同じクラス定義を同梱しています。
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
