type UserConfig = {
  theme?: string;
  language?: string;
};

function getUserConfig(config?: UserConfig): void {
  const theme = config?.theme ?? "light";
  const language = config?.language ?? "ja";
  console.log(`テーマ: ${theme}, 言語: ${language}`);
}

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/C4TwDgpgBAqgzhATgYQPYDsBmBLA5lAXigG8AoKKYACwgFsIB+ALijmEW3VwG5yoAbAIZcAroNyMWbDl14BfXqUwj0AY2DYMUCcHhI0WPAApVGHLmawEKM3gCULAG6psAExJ9T6NpRr1CUF7mDAB01HTQDAxQAET8eFTAMbwUXj5CouLQREF4oRm4YhJQUbEAVoLJnhhwqPwQIfyouEYABoBjDIA-DIB7DCwAJMTh9HIANFCAAFGAeVH9xAVFEHKtdvJAA
