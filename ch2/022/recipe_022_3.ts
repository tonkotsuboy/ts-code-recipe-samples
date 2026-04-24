// 注: 書籍では recipe_022_1.ts で定義された logMessage 関数の呼び出しのみを掲載。
//     単体で動くよう、このファイル内に関数定義を同梱しています。
function logMessage(message: string | null | undefined): void {
  console.log(message ?? "デフォルトメッセージ");
}

logMessage(null); // デフォルトメッセージ
logMessage(undefined); // デフォルトメッセージ
