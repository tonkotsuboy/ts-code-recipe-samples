type User = {
  name: string;
  details?: { age: number };
};
const user: User = { name: "鈴木", details: { age: 25 } };

// ?.を使わない場合
const age = user && user.details && user.details.age;
console.log(age);
