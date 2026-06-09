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

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/MYewdgzgLgBArhApgJwjAvDA2gKBjAbxgEsATALhgEYAaGMAQwFtFKAiQBXlAT0LZgF8aeQiQowATHUYt2gFiTAFOa8BOALoBuHDlCQQAG0QA6AObIQcAA4AKNoDOGQD8MgNoZbgADlA5ZFsAlOq0RdBqAwAjPQsEFAhPTXAfPSMTcwBRMFILCMjtGONTSzYAQQAFAElAG4ZAToZAXYZAZ4YSjy8o330dEEMrAHF4gBUYAHoGM2Iu0NQ2OiJoBigESjEABmm6KBAQAGsAWQhKKgAOaf4I73rG5rY8gHkAZU6evoGkIZGYMYn18WnaGAXltamZ3dr0g0yCSSKVUQA
