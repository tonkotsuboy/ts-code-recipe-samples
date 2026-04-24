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
