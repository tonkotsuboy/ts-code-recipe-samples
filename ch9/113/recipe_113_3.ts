type Fish = {
  swim: () => void;
};

type Bird = {
  fly: () => void;
};

// ユーザー定義型ガード関数
function isFish(pet: unknown): pet is Fish {
  return typeof pet === "object" && pet !== null && "swim" in pet;
}

// ブラウザ上で編集できます
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/C4TwDgpgBAYglgZwBZQLxQN4CgpQQdzgFsAuKACgEo0A+KANwHs4ATAbiwF8OtRIoAQnABOLNJhxQAZgBsQZKrQbN2XHgHp1UQGcMgH4ZAbQy7AWdqBK-0DR6oBqGXYEmGQEWpgB1MsUgK4A7AMbA4jV1ETxkckhgMjcAa1dGfFdKMmC-BFhEFGxcYQhgZ2FfPghGKSh41GKoACJGACMAKwhPUqgAMgbCjKgAQhLXZxkZRubSgmJ6uF9gjk4gA
