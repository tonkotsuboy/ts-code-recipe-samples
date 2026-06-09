// コンパイルエラー
const user = {
  name: "鈴木",
  // ageプロパティがstring型になっている
  age: "24",
} satisfies {
  name: string;
  age: number;
};

// ブラウザ上で編集できます
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/PTAEmaGRnhkRYZBKGRrhkBUMhLhkD8MAoAxgewHYGcAXUAV3wFMAnUAXlAG91RRcBDAW3IC5QAiQFiTAFOa8ANE1AhQrAOblA6wyBbhmiAxhkDFDIBkGIpQCWuaYGj1QNYMgKwZAxgyAzBkAiDIGiGcTO58ATABZR6AL6h8rQtvwAzbXJ8BnE2Th4tXWkAbjtZHlwSdgAjKjj3GKA
