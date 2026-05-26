type Direction = "Up" | "Down" | "Left" | "Right";
type NormalizedDirection = Lowercase<Direction>;
// "up" | "down" | "left" | "right"

const myDirection: NormalizedDirection = "up"; // OK
const myDirectionError: NormalizedDirection = "Up"; // エラー
