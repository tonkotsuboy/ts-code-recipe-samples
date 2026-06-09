type ApiRequest<T extends "GET" | "POST"> = {
  url: string;
  method: T;
} & (T extends "GET" ? { body?: never } : { body: object });

const getRequest: ApiRequest<"GET"> = {
  url: "/api/users",
  method: "GET",
  // body: {} // Error: 'body' は never 型なので値を設定できない
};

const postRequest: ApiRequest<"POST"> = {
  url: "/api/users",
  method: "POST",
  body: { name: "田中" },
};

console.log(getRequest, postRequest);

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/C4TwDgpgBAgmCWAlCBHArhAzsAPAFSggA9gIA7AE0ygCIBxAUTxqgB9aAFAeQGVmA+KAF4oAbwBQUKGgBOAGwBcUbDPhkA5gG5JUALYRgACwD2FJXm0BfKADIoACgLFSlavSYsA-GKgAjUyCeSmQQAG4QMlDWSqJ+AUrGvgBWEADGwFEAlNriqcZk2FDqBsjoWMBKcEioGNg47gLCYjqyirQA9ACGCO1omBGYNAA0OvpGpkoNwzrt7XEUIDHWs1AMMjLGMkoA5P4L21CA9gxQIeGRgNHqgFYMgHYMgOYMgCQKgEkMgLRRgFnat4CyDJeAIgziljl5AoZMDGbClWoVWAIcHlercPg0QQiCRSVqTLo9PoDaZSMYmMycXjMEZSPaLHxkTr6SaABldALRyLEsI3+4ly+UwxjkEAAdHJjOp7MVgDDsEMoCCwTVytkgA
