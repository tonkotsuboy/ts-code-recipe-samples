// 書籍では `declare const otherError: unknown;` と書かれていますが、
// 単体で実行できるように、このファイルでは別Realm由来と仮定した値を実際に用意しています。
const otherError: unknown = new Error("別Realm由来のエラー");

// instanceof は別Realm由来のエラーに対してfalseになる場合がある
console.log(otherError instanceof Error);

// Error.isError()はRealmをまたいでも正しく判定できる
if (Error.isError(otherError)) {
  // この中ではotherErrorがError型に絞り込まれている
  console.log(otherError.message);
}
