// クラス定義のみのサンプルのため、末尾に動作確認用の `new` 呼び出しを追加しています（書籍にはありません）。
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
