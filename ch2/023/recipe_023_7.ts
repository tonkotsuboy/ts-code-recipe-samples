function getFirstFruit(fruits: string[] | undefined) {
  return fruits?.[0];
}

console.log(getFirstFruit(["りんご", "バナナ"])); // "りんご"
console.log(getFirstFruit(undefined)); // undefined

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3#code/GYVwdgxgLglg9mABAcwKZQGIwE4GdPYgxQAUwhxuAXIvtjGMgNoC6iAPouACarAOpuASkQBvAFCJE2dCGxJyRKLgD8AOiYAGFgG5xAX3HiICXHAA2qNebjISaTDnwYKpJgCJAUQyBkhkAqDO4AaRHdABYZAKYYw9xYhIR1EAHp44J9-Y1MLKxs7Byw8AiUSHj4BYViEpKL+MEEgA
