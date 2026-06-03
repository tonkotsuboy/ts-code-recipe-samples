try {
  Promise.resolve().then(() => {
    throw new Error("then内のエラー");
  });
} catch (error) {
  console.log("ここには到達しません", error);
}

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3#code/C4JwngBA3gUBEAUQHsC2BLAzgUwHQm02QBsA3bACgEpdgALbAOwuogF4A+aOeCelAO4RG2IQFEQKEBQBE9JoFDFQHYMgCoZAlwyAfhhlUA3DwC+umPogBjAIbBTdCBWyTkIKt3inkjIsTzFkAc1mAygwBgNYMgPYMgAxKgCoJgOoMgH4MgNoMgMkMMgA0EPZSRvpAA
