// 推奨：明示的な条件分岐
function displayName(name: string | null) {
  if (name === null || name === "") {
    return "名前未設定";
  }
  return name;
}

console.log(displayName("")); // "名前未設定"
console.log(displayName("田中")); // "田中"
console.log(displayName(null)); // "名前未設定"

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3#code/PTAEgrjQLTULH-DgzQuT0CFugrBkIbmg3uUGBKgEnQFADMBXAOwGMAXASwHtjQATSgZwAcAbAQwE8A5DgWwCmACmIDBALlBNyAJ0rEA5qAA+oYoTZsAlKADeuUKEr5Qo8aAC819Zraq1YoVZsAiV7oNGjsweUKydK6AsCqAskqAVOaAtFGAWdquANyGoAC+ib7+geriCSm4pLRM1GyCAHRs1IrCjKycvOLC7tracaAgoCERMa65+YUlZRVV7Nx8QvWADK6AtHIeTS1grpNdecQFRaXllcxDtaMaWo3Nre1RsUA
