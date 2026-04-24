async function loadLanguagePack(language: string) {
  const langModule =
    language === "ja"
      ? await import("./lang-ja")
      : await import("./lang-en");
  console.log(langModule.messages.greeting);
  return langModule.messages;
}
// 使用例
loadLanguagePack("ja"); // "こんにちは"が出力される
