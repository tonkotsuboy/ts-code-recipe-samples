type ConvertToNumberArray<T> = T extends number[] ? string[] : T;

type A = ConvertToNumberArray<number[]>; // string[]
type B = ConvertToNumberArray<number>; // number

// ブラウザ上で編集できます
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/C4TwDgpgBAwg9gOwG4QE7ACpwHIFcC2ARmgIKqoCGIAPBgHxQC8UGUEAHsBAgCYDOUBAWKoA2gF0oAfih9gqAJYIA5hKgAuFgG4AUDtCQoJJrEQp0WPEVLkq1IdbHi6WqAHo3s+UtXj94aAAhE3hkNEwcYRtKGgcRF3dPOLQgA
