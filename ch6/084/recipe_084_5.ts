function greet(name: string = "ゲスト") {
  console.log(`こんにちは、${name}さん`);
}

greet(); // こんにちは、ゲストさん
greet("太郎"); // こんにちは、太郎さん

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3#code/GYVwdgxgLglg9mABAcwE4FN1QBRgIYC26AXIgM5SoxjKIC8iARIE0MgnQyATDIwJSIDeAUIkQQEZOABt0AOnFxk2AAaBlBkDJDIGsGQIYMgewZAgAwASXviIBfQKoMKhVwDc-Y-35pMOa4gD0rxKs2627cw4wsbEZAKk1AOYTuKzcPL20dcPMgA
