// 書籍では recipe_156_5/index.ts の例に合わせた前提のモジュールとしてのみ触れられています。
// 配布コードでは単体で動かせるよう、最小の実装を用意しました。
export default function formatDate(date: Date): string {
  return date.toISOString();
}
