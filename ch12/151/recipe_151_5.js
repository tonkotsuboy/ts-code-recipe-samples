class MyClass {
  #myBrand;

  static isMyClass(object) {
    return #myBrand in object;
  }
}

const myInstance = new MyClass();
console.log(MyClass.isMyClass(myInstance)); // true

const foo = {
  name: "鈴木",
};
console.log(MyClass.isMyClass(foo)); // false

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&filetype=js&checkJs=false#code/MYGwhgzhAECyCeBhcVoG8BQ1oGIC28AQgE5gB2AJgNwZbQQAuYDAlsNCxAspBABQB7AEYArAKbAGASnR1sxMQwCuxMrgIlyFDmuHjJNbAF8MJjMAFlG0AgEkrTMsDHQAvNDJiA7nCQp+UjQWVgIgYgB0IAIA5nzc-uGc8bx8dg7kzlKB0AD0OdAMxEpitMHWAGYCAm6y2GRgeGIAXNAARIAsSYAU5q0ANKZBlhChEVGxyVCJXH4plQJZVLn55WAgEGJAA
