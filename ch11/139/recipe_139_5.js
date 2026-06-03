function processData(value) {
  console.log("処理開始");
  if (value < 0) {
    throw new Error("値は0以上である必要があります");
  }
  console.log("この行は値が負の場合実行されません"); // エラー時は実行されない
  console.log(`処理結果: ${value * 2}`);
}

processData(5); // 正常に実行される
console.log("---");

try {
  processData(-1); // エラーが発生し、以降の処理が停止
  console.log("この行は実行されません"); // エラーにより実行されない
} catch (error) {
  console.error(error);
}

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&filetype=js&checkJs=false#code/GYVwdgxgLglg9mABABwE5wgUwM7YCICGUBAFAG4EA2ImAlIgN4BQiiEC2clmAdJXAHMSAIkBnioDAXQNGpgac1htANwtEMYInJUaiADyIADPWatWUABboA7ojCZLAUVTpUIwCQKgewZdgU7lAUHKBzBkBCDIDRDICj+oCBkYAyDH6AUQyAfgyAmgxyiqwAvkrsYJzcfIIigMoMgHYMgDIRrs5hgAUxeYAsGoAQKoD52gWAqgyAMQzRgNoMgMkMCYgA9F2IgBUMgJcMgD8MgEJmrnVNgFYMgCIMqRxcvPxCAAYSgAq+gDnmAFyIACQMFNSYiABUiABMScsKTClMaBg4+ESkAKwK3b2AxtaAHHqA1gwTRoBJhpDKLbLCAC00ISTCYUFQAE9GEoHlhcIRiCRIQBGD49frDMKALzdAPiugHUGQCADB5ALJpeQkYUAOgqAI2s5ukFlkhMJ8kVAa0OvjeoMhn9ABEMkUBM1ubCIEBMakwDjgqAMbLBPEVjhImuVNySQA
