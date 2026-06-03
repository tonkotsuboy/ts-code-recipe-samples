function sum(...numbers: number[]) {
  console.log(numbers);
}

const numbers = [1, 2, 3];
sum(...numbers); // 1, 2, 3が個別の引数として渡される

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3#code/GYVwdgxgLglg9mABAZxAWwBQDodnQIwFMAnZALkTzSOIG0BdASkQG8AoRRCBZOAG0JY+cAOYYqNZIwDcbAL5s23MMiiUCJZIgC8iWgEYANIgBMxgMz1ZqTDiwTNMxAHpniI6YuAZBkDQCoFIlQDsGQFR9QAdTQAsGQHUGQDMGQEI7QFUGQBiGQGiGIA
