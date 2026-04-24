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
