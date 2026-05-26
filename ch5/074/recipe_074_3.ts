const user = {
  name: "田中",
  age: 30,
  hobby: ["読書", "旅行", "ゲーム"],
} as const;

// Object.keys(): string[]（as constでもキーはstring[]）
const keys = Object.keys(user);

// Object.values(): ("田中" | 30 | readonly ["読書", "旅行", "ゲーム"])[]
const values = Object.values(user);

// Object.entries():
// [string, "田中" | 30 | readonly ["読書", "旅行", "ゲーム"]][]
const entries = Object.entries(user);
