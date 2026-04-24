// 意図的な型エラーデモ: Lowercase変換後の型にマッチしないケースでエラー (期待エラー: TS2820)
type Direction = "Up" | "Down" | "Left" | "Right";
type NormalizedDirection = Lowercase<Direction>;
// "up" | "down" | "left" | "right"
const myDirection: NormalizedDirection = "up"; // OK
const myDirectionError: NormalizedDirection = "Up"; // エラー
