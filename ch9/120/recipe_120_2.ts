// 文字列リテラル型のユニオンから新しい型を生成
type Status = "loading" | "success" | "error";
type StatusFlags = { [K in Status]: boolean };
// { loading: boolean; success: boolean; error: boolean; }
