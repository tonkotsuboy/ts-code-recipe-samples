type ApiResponse<T extends "success" | "error"> = T extends "success"
  ? { status: "success"; data: any }
  : { status: "error"; message: string };

type SuccessResponse = ApiResponse<"success">;
// { status: 'success'; data: any }
type ErrorResponse = ApiResponse<"error">;
// { status: 'error'; message: string }
