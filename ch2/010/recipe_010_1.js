// 注: const への再代入は実行時エラー（TypeError）になる。
//     ブラウザや Node.js で実行するとそのことを確認できます。
const greeting = "おはようございます";
console.log(greeting); // "おはようございます"
greeting = "こんにちは"; // エラー：再代入はできない
