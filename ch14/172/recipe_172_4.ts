// 注意: 書籍ではこの例を「case 200 に return がないためフォールスルーエラーになる」と
// 説明していますが、実際には case 200 が空ケースのため TypeScript 5.x/tsgo では
// noFallthroughCasesInSwitch でもエラーになりません（空ケースは許容される仕様）。
// recipe_172_5.ts が推奨の書き方です。
function getStatusMessage(code: number): string {
  switch (code) {
    case 200: // returnがないためフォールスルーエラー（404のケースへ流れてしまう）
    case 404:
      return "Not Found";
    default:
      return "Unknown";
  }
}
