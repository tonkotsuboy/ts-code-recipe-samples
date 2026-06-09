const user = {
  name: "田中",
  profile: { age: 18, hobby: "読書" },
};

const updatedUser = {
  ...user,
  profile: { ...user.profile, age: 21 },
};
console.log(updatedUser);
// {name: "田中", profile: {age: 21, hobby: "読書"}}

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/MYewdgzgLgBArhApgJxgXhgbwFAxmAQwFtEAuGAIkAZXQWjkKAaXGAB2RADMBLAGzKxgIBzPgEYAHPRgALEACNZAT3IVAtVGAPswowAvoy0BubNlCRYcZgBMCUROYCqSVBhx4AdG4QpGeVhx59MMG4uHsguPly8kkJ8AEwi2roGxhAgvC7cIIIAFGaW1nYOAJQGAPQlWIQkyrQMLGwR-tHkcZIy8kqU6hRaWkA
