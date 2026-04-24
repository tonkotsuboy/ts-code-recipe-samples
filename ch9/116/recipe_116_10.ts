// 書籍では `let status = ...` ですが、status はグローバル名と衝突するため、
// モジュールスコープに閉じるために末尾で `export {}` を使っています。
let status = "success" as const;
// statusの型: "success"

export {};
