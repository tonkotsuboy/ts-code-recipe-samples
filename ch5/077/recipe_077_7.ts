const text = "Hello";

// 最初の3文字を取得
const [first, second, third] = text;
console.log(first, second, third);
// H e l

// 配列でも同様
const numbers = [1, 2, 3, 4, 5];
const [a, b, ...rest] = numbers;
console.log(a, b, rest);
// 1 2 [3, 4, 5]

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3#code/MYewdgzgLgBFCmAPWBeGAiAEvANjk6A3AFDED0ZMgAOaC4SoHYMAzIOGmg6tqBJDIGvKg6frGiSwBtAGYBLAE7QANDAjw+AE2lQAFuPkBdGGgTISfCCBzwAdPgDmAClESo02QqWqx8gJQkKMTDHgwcpD4CyiYDoSoDmDIBBDIAwKoAblrzg0DBgAK4AtgBG8BJaMAIAjNIATNIM0gAs0gCs6npxggCG0qnSxs1i8NCaaElpGRDVkIYm5hb1MI0wrdBu5JQ5MPnZxTBlMJVAA
