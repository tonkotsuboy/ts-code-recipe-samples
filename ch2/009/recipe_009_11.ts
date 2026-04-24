const users = [
  { id: 1, name: "佐藤" },
  { id: 2, name: "鈴木" },
];
console.group("ユーザー一覧");
console.table(users);
console.groupEnd();
console.group("APIレスポンス");
console.log("GET /api/users", { status: 200, tookMs: 180 });
console.log("POST /api/users", { status: 201, tookMs: 220 });
console.groupEnd();
