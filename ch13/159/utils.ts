// recipe_159_3.ts / recipe_159_7.ts が参照する共通モジュールです。
// 書籍では前出の recipe_159_1/utils.ts や recipe_159_8/utils.ts を流用する想定で省略されています。
export function formatMessage(message: string): string {
  return `[Utils] ${message}`;
}
