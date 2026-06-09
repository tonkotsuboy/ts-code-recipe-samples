const key1 = Symbol();
const key2 = Symbol();
// エラー: Type 'typeof key2' is not assignable to type 'typeof key1'.
// @ts-expect-error ts(2322)
const sameKey: typeof key1 = key2;
console.log(sameKey);

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/MYewdgzgLgBA1gUwJ4EYYF4YGUkFsBGIANgBQCUA3AFCiSyJIBMG2ehplVA9FzIBUMgS4ZAPwwAuGABUkABwQwA5FGkIQAM3jJGcmAEsIMMCFgBDCBG0BzMEfxFZUEDEUz5T5WoYo5AOm68AAlAQALQIAB4ywFAhAE7RINGOECSMAMyMjGQ04NAwEEa4CADSyGKuquqoLAyM1LQQxAheRCDmJHkFxUiUQA
