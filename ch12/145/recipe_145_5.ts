class Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

class BadStudent extends Person {
  constructor(name: string) {
    this.name = name; // コンパイルエラー
    super(name);
  }
}

// 実行すると ReferenceError: Must call super constructor in derived class ... になります。
new BadStudent("山田");

// ブラウザ上で編集できます
// https://www.typescriptlang.org/play/?ts=6.0.3#code/MYGwhgzhAEAKCmAnCB7AdtA3gKGtNYAtvAFzQQAuiAlmgOYDc2u0w6liArsBSogBQFiZDrToBKLCzwUAFtQgA6IfGgBefEXhM8AX2z7soSDABCYACYBlCpwvw0FaPAAeFBxZgJk6KXjZoHNy8AioiVGKSOHgy8koq6prEDNAA9KnQgM0MgM8MgIsMgCUMgNcMgBUMgJcMgD8M0uScAA5IglriOtD6hunQgPnagDIRgJoMgNEMgBYM0ABK8ABmSA7A8ACiiIh8ZACynJSsYCAg1XWIrOxUwXzQtND2NABu8Bas4FDQig-QgNYMgFYMgFEMgH4MPYBADNho8AB3aDmay2eyOfgAIkAjjqABldIU0gA
