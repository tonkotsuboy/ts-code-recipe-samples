function setDefaultWithNullish(value?: number | null) {
  value ??= 999;
  console.log(`結果: ${value}`);
  return value;
}

setDefaultWithNullish(); // 結果: 999（undefinedなので代入される）
setDefaultWithNullish(null); // 結果: 999（nullなので代入される）
setDefaultWithNullish(0); // 結果: 0（nullでもundefinedでもないので保持される）

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3#code/GYVwdgxgLglg9mABAZwKZQCKuAQxAGygHUYoALAOQPxmTIAoA3HfEVAfgC5EwQBbAEaoATogA+PagEpEAbwBQiRM1apE7dgF5EATj0BuRYggJkcfKgB0+OAHN6AA0AKvoBzzbgBJZKtgF8HUwyVhdBBhJG9UQx95eTRMbDxCEnIqfBo6egDEAHpsxFduPR1ACH-wABNsGDBUMsArBkA7BkBzBkBjuUBTRUBVBkAYhkBohkBIf9j0LFwCYlJKaloGXjSs3Py3XT1i6fwGlo6e-rihxNGUiYyABlm8gsRD5epGwCCGcsrqspvawBEGJsBd+UBAYy6+oA
