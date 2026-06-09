type ApiResponse<T extends "success" | "error"> = T extends "success"
  ? { status: "success"; data: any }
  : { status: "error"; message: string };

type SuccessResponse = ApiResponse<"success">;
// { status: 'success'; data: any }
type ErrorResponse = ApiResponse<"error">;
// { status: 'error'; message: string }

// ブラウザ上で編集できます
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/C4TwDgpgBAgmCWAlCBnMB7AdiiAeAKlBAB7ASYAmKUARCgK4DGjqKNUAPrRAE4-o8aAPigBeKIRJlK1OkxYo2AKChQA-FADeUFMACGweigBctBs1Y0A3FAoG9pvZhBQAviqintug0dM1efkEbAFtWPQBzCFNdHnhMCLcrJSVQSCgAZXlWZDQsHDFYBFyMbDw5C0VhZIB6Gq0dfUMTKABycwUUVps7fUdnN1TwaABRPgES-OhxOCRUUpxcAPHBIVr67ya-NsCBbqgwxUjoxriEtyA
