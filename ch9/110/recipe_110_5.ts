const otherError: unknown = new Error("別Realm由来のエラー");

// instanceof は別Realm由来のエラーに対してfalseになる場合がある
console.log(otherError instanceof Error);

// Error.isError()はRealmをまたいでも正しく判定できる
if (Error.isError(otherError)) {
  // この中ではotherErrorがError型に絞り込まれている
  console.log(otherError.message);
}
