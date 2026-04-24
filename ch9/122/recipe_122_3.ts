const user = {
  age: 18,
  name: "田中",
};

// userオブジェクトのageプロパティの型 number を抽出
type AgeType = typeof user.age;
// userオブジェクトのnameプロパティの型 string を抽出
type NameType = typeof user.name;
