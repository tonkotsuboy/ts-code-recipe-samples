function checkAge(age: number): void {
  const isAdult = age >= 20;

  if (isAdult) {
    console.log("ユーザーは20歳以上です。");
  } else {
    console.log("ユーザーは20歳未満です。");
  }
}

checkAge(25); // ユーザーは20歳以上です。
checkAge(18); // ユーザーは20歳未満です。

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3#code/GYVwdgxgLglg9mABBAFgUwgawIIHM0AUAhvgFyJggC2ARmgE4CU5AbnDACaIDeAUIsgQBnKIhhDsHEABtRAXkQk0iAHwKATAAYA3L35jgiAuMkyojHvoERhcaWgB00uLgIAiQGcMgH4ZAbQxfA9gxagM7WgKdygFBygOYMgJoMgEAMboy6AgC+iGjSQsp8Ata29k4u7t5+gZpBgFTmgAF20XEJ+km89byoGDj4BOoArAmIAPQ9iEUBweHVTehYeIQAjAAc3X0DvkOlldVAA
