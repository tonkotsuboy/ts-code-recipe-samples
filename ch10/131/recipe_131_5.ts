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
