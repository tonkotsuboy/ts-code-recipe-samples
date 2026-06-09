const user = {
  age: 18,
  name: "田中",
};

// userオブジェクトのageプロパティの型 number を抽出
type AgeType = typeof user.age;
// userオブジェクトのnameプロパティの型 string を抽出
type NameType = typeof user.name;

// ブラウザ上で編集できます
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/MYewdgzgLgBArhApgJxgXhgbwFAxgQwHNEAuGARgA4AaXGMfAW1JgCJAGV0Fo5V2gXwG5s2APTD4SZICqGQGsMgDoZA5QyB6hkATDIDsGIokDrDIFuGQIsMgMYZAxQyrA0er04jAEYoYgJIZAvUaAvxWxQAngAdEMAILEAKh5eGG6eIABm4igAdBqCopFSckpqDMw6BsZm0MgAlmCEdk4ugTAAckyIAZ7oMCGI4QlRqYj8QA
