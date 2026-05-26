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
