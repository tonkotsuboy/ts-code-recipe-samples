// 書籍では [3, 1, 20] を toSorted() で辞書順に並び替える例として掲載されています。
// 比較関数を省略すると "1" < "20" < "3" の辞書順になるため、結果は [1, 20, 3] です。
const numbers = [3, 1, 20];
const sorted = numbers.toSorted();
console.log(sorted); // [1, 20, 3]（辞書順になる）
