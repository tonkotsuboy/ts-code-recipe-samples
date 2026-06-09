function convertNumber(value: unknown): void {
  if (typeof value === "number") {
    console.log(value.toFixed(2));
  } else {
    console.log("数値型ではありません");
  }
}

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/GYVwdgxgLglg9mABBBA3ApgJygORAWwCMsAKVAQwBsR0AuRcAazDgHcwBKe1OGAE0QBvAFCJEMYIhJQAngAd0cSRWrpEAXk2IARGALFM2jkNFjkCAM5xK6AHSU4AczJUatqHABiMAB7o+JABMHBwA3KYAvojolBZqImbmYFY29k4k2oAOpoAkCoDR6oDmDID2DIBCDIBRDIB+DIDaDIDJDEbhYhHCEUA
