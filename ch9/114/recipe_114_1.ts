type User = {
  id: number;
  name: string;
};

function assertUser(value: unknown): asserts value is User {
  if (typeof value !== "object" || value === null) {
    throw new Error("ユーザー情報がオブジェクトではありません");
  }
  if (typeof (value as { id?: unknown }).id !== "number") {
    throw new Error("idが数値ではありません");
  }
  if (typeof (value as { name?: unknown }).name !== "string") {
    throw new Error("nameが文字列ではありません");
  }
}

function handleResponse(payload: unknown) {
  assertUser(payload);
  // ここではpayloadがUser型に絞り込まれている
  console.log(`${payload.id}: ${payload.name}`);
}

handleResponse({ id: 1, name: "田中" }); // "1: 田中"
