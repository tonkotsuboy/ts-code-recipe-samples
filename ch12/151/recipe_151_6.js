class MyClass {
  #myBrand;

  static isMyClass(object) {
    return #myBrand in object;
  }
}

const myInstance = new MyClass();
const foo = {
  name: "鈴木",
};

Object.setPrototypeOf(foo, myInstance);
console.log(MyClass.isMyClass(foo)); // falseのまま

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&filetype=js&checkJs=false#code/MYGwhgzhAECyCeBhcVoG8BQ1oGIC28AQgE5gB2AJgNwZbQQAuYDAlsNCxAspBABQB7AEYArAKbAGASnR1sxMQwCuxMrgIlyFDmuHjJNbAF8MJjMAFlG0AgEkrTMsDHQAvNDJiA7nCQp+UjQWDtAAZgICbrLYZGB4YgBc0ABEgCxJgBTmyQA0pjQYAPKiEgwAdBCKAArEAgw18AAOYvmhfOECWTbw9ozkzoHmlhACIGIlIAIA5nzc-iWcM7ytEVKB0AD0a2FgIOWAdgyAfgz7QA
