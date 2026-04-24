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
