type UserConfig = {
  theme?: string;
  language?: string;
};
function getUserConfig(config?: UserConfig): void {
  const theme = config?.theme ?? "light";
  const language = config?.language ?? "ja";
  console.log(`テーマ: ${theme}, 言語: ${language}`);
}

getUserConfig({ theme: "dark", language: "en" });
// テーマ: dark, 言語: en

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/C4TwDgpgBAqgzhATgYQPYDsBmBLA5lAXigG8AoKKYACwgFsIB+ALijmEW3VwG5yoAbAIZcAroNyMWbDl14BfXphHoAxsGwYoE4PCRoseABQqMOXM1gIUpvAEoWAN1TYAJiT4n0bSjXqEonmYMAHTUdNAMDFAARPx4VMDRvBSe3kKi4tBEgXgh6bhiElCRMQBWgkkeGHCo-BDB-Ki4hgAGgGMMgD8MgHsMLAAkxGH0cgA0UIAAUYB5UX3E+YUQci228qSk2rrWBs3EPuEs0S6CiADW0aOzmXsQ6NFQckukAPQPUJ09UAfHo5MsV0A
