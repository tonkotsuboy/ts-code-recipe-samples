function identity<T>(arg: T): T {
  return arg;
}

type GenericResult = ReturnType<typeof identity>; // unknown
type Result1 = ReturnType<typeof identity<number>>; // number
type Result2 = ReturnType<typeof identity<string>>; // string

const a: Result1 = 1;
const b: Result2 = "hello";
console.log(a, b);

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3#code/GYVwdgxgLglg9mABDAJgUzLKBPAPAFQD4AKAQwCcBzALkXwEpb9EBvAKEUXLShHKQqUA3GwC+bNjgAOaRAHEMacjAgAlNAGcQAGyiIAvInW9++bDNzS0cYMnSYYOQkMQB6V4nABrMHADuYJLmsupaugCMBkY8fGBmFlY2dhhYeGAgALYARkqEzm4e6dlKQTLRYVAATFHGsfFolsFJqCmOeBpQymCUeS7uiB1dlBIQCB2IpLShOlCRhuEio2DjWVOaM9WGAEQAFmja2nBbi2Nw2mgAdIeUZAA0iFn0QkA
