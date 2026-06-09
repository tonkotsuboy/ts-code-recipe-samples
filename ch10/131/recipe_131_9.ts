type ApiResponse =
  | { status: "success"; data: { id: number; name: string } }
  | { status: "error"; code: number; message: string }
  | { status: "loading"; message: string };

// ApiResponse から "success" 状態のみを抽出
type SuccessResponse = Extract<ApiResponse, { status: "success" }>;
// 結果:
// { status: "success"; data: { id: number; name: string } }

const sample: SuccessResponse = {
  status: "success",
  data: { id: 1, name: "Alice" },
};
console.log(sample);

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/C4TwDgpgBAgmCWAlCBnMB7Adi6BeAUFFAD5QDeUKwAhsAK4oBcUARCnQMYeoosDcUACa1qzCvEHNMdALYAjCACcBmajIjMqi+JgDmUAL6HCJcpRr0mrJYvSL+UDukEao0+UoHqUKartdaOvoGJqQUVLQMzCwANujUgkEO3r7+msDaeoZ8+PgA9HmwCMhoWDhQgNIMgJEMrOxcPCxQgG1OgNKGgHYMgP4MgEkMgL1GgF+K+KCQUADKnNw+JRjYeFAAogAeGdQcwAA8cEio0zgANGYRltF1E7yGAHw5BVCACr6AOeaM+YXhFlG14w0CwjRiUBJSsgUyjcagCGSChmM+Cc2GAlDUYBirjG9Um2zKszIJkObzYHx8LF2Jm+ojM-ygAEZ9qp1NEYDF4NxGgYiQYcjCUOgkQA6OK6AAUvhkiIgAEo+EA
