type UserConfig = {
  theme?: string;
  language?: string;
};
function getUserConfig(config?: UserConfig): void {
  const theme = config?.theme ?? "light";
  const language = config?.language ?? "ja";
  console.log(`テーマ: ${theme}, 言語: ${language}`);
}

getUserConfig(); // テーマ: light, 言語: ja
getUserConfig({
  theme: "dark",
}); // テーマ: dark, 言語: ja
