declare global {
  var __DEV__: boolean;
}

globalThis.__DEV__ = true;

if (globalThis.__DEV__) {
  console.log("開発モードで実行中");
}

export {};

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3#code/CYUwxgNghgTiAEBzCB7ARlC8DeAoe8AbrPAPqkAiAogGrkBc8aKKEIUAdgNy4C+uuZOkwAVABYBLAM4A6ctTql4AXngAXGAFcQPXBIBm8ABRCMEcdLmVa5AJQ588MCg5TWIGakRGARIGjUwC83QCOGQB+GQEmGQHMGQHztQBkIwFo5H1seflwQAA8ABxQYNRxeLiA
