// 書籍ではこのスニペットのみだが、単体実行のため sum 関数の定義を同梱している
function sum(...numbers: number[]) {
  console.log(numbers);
}

const numbers = [1, 2, 3];
sum(...numbers); // 1, 2, 3が個別の引数として渡される
