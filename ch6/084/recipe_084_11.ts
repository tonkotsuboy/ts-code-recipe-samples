function greet(age: number, name = "ゲスト") {
  console.log(`こんにちは、${name}さん（${age}歳）`);
}

greet(25); // こんにちは、ゲストさん（25歳）

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3#code/GYVwdgxgLglg9mABAcwE4FN1QBQENnoBciYIAtgEbqoA0JuZ6iAvIgESBNDIJ0MgEwxsCUiAN4AoRIggIAznAA26AHSy4ybAANAygyBkhkDWDIEMGQPYMgQAYAJELAN0AX0CqDFsAQ-2fzXAztaBIf7X8A3CKsiRaJg4AEwArN6IAPSRiNr6xtw8dvZh7kA
