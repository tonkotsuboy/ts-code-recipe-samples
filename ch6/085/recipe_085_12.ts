function sum(...numbers: number[]) {
  console.log(numbers);
}

const numbers = [1, 2, 3];
sum(...numbers); // 1, 2, 3が個別の引数として渡される
