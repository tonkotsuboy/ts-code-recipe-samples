const user = {
  name: "田中",
  age: 30,
  hobby: ["読書", "旅行", "ゲーム"],
};

// string[]
const keys = Object.keys(user);

// (string | number | string[])[]
const values = Object.values(user);

// [string, string | number | string[]][]
const entries = Object.entries(user);
