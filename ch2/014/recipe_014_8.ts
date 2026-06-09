// 早期リターンを使った書き方
function getAgeCategory(age: number): string {
  if (age < 13) {
    return "子供";
  }
  if (age < 20) {
    return "10代";
  }
  return "大人";
}

// ブラウザ上で編集できます
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/PTAEkvTR8c0K4ZH6GQfhkM8MgkhkP7yhjBkPoMgPs0LIMhO0wCgAzAVwDsBjAFwEsB7c0AcwFNqBBNgYQENrWzegCcAngApebAFyhypALYAjVsICUsgM7Vhtcs1ABvQqFC1ioSW1AAeUAEYAzGqMnToYe1LCmAIkAK2oDZ8r4A3G4Avm7mllKstqAATAAMLsbuHl4+oL72SYDHcqERbp7U3n6A5JqAXXKF4UA
