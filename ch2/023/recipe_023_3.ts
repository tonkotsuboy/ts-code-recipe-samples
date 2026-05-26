type User = {
  name: string;
  details?: { age: number };
};
const user: User = { name: "鈴木", details: { age: 25 } };

// ?.を使う場合
const age = user?.details?.age;
console.log(age);
