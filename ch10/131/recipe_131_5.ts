type ApiResponse =
  | { status: "success"; data: { id: number; name: string } }
  | { status: "error"; code: number; message: string }
  | { status: "loading"; message: string };

// ApiResponse から "loading" 状態を除外
type CompletedResponse = Exclude<ApiResponse, { status: "loading" }>;
// 結果:
// | { status: "success"; data: { id: number; name: string } }
// | { status: "error"; code: number; message: string }

const sample: CompletedResponse = {
  status: "success",
  data: { id: 1, name: "Alice" },
};
console.log(sample);

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/C4TwDgpgBAgmCWAlCBnMB7Adi6BeAUFFAD5QDeUKwAhsAK4oBcUARCnQMYeoosDcUACa1qzCvEHNMdALYAjCACcBmajIjMqi+JgDmUAL6HCJcpRr0mrJYvSL+UDukEao0+UoHqUKartdaOvoGJqQUVLQMzCwANujUgkEO3r7+msDaeoZ8+PgA9HmwCMhoWDhQgNIMgJEMrHEJSVCAbU6A0oaASQyAJmmAaJr4oJBQAMLoMmAxEMAQgiUY2HhQAKIAHhwxdC4APHBIqNM4ADRmEZbRdYl6LIYAfDkFUIAKvoA55oz5hWHmkVZsnNw+DsI0YlAJFJZAplG41AEMkFDMYbq9DlFrIpbPYBE4XMCPGCUn5IZlgrknNhgJQ1CNXINhqNxpNtmVZmQTAiPuwuDwWLsTH9RGYgVAAIz7VTqaIwGLwbjnAycgw5IkodCjAB0cV0AApfFSIABKPhAA
