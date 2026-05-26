declare global {
  var __DEV__: boolean;
}

globalThis.__DEV__ = true;

if (globalThis.__DEV__) {
  console.log("開発モードで実行中");
}

export {};
