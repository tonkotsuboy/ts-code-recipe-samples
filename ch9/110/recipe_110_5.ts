const otherError: unknown = new Error("別Realm由来のエラー");

// instanceof は別Realm由来のエラーに対してfalseになる場合がある
console.log(otherError instanceof Error);

// Error.isError()はRealmをまたいでも正しく判定できる
if (Error.isError(otherError)) {
  // この中ではotherErrorがError型に絞り込まれている
  console.log(otherError.message);
}

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3#code/MYewdgzgLgBCUAsCmAnAoilIUC4YFcwBrMEAdzBgF4YwkyYMsUAKAIkFIlAJSQEMAbALaBGV0Cm5oDsGQBUMgS4ZAPwxsAlAG4AUCoD06mAEtIUXmGBIQAMxiB7Bm58hYqXMDWDID-tQOoMgMwYTAiEnuArBkDRDIAsGoAQKoAyDIBCDH4qoJAg-EgAdPwgAOYs8MjomNg6egZGpoxZKMpqmoXM8doQTNgsCuY8AoKASQyAfgyA+gyAIgyA5gyAQQyAxtbOgPIMgCRKgFna3YCyDJHaZiw1KJXVRWmIqAsKCjAA3iowMGWAygzigLRy3ebp60UhC4DR6vaAer6AUQyAPfGtgDEMrp2R+9EQsQkkqlLpkKoIkBAILxkkgSgBfIA
