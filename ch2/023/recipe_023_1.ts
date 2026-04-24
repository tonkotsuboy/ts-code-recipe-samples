type User = {
  name: string;
  details?: { age: number };
};
const user1: User = { name: "鈴木", details: { age: 25 } };
console.log(user1.details?.age); // 25
const user2: User = { name: "田中" };
console.log(user2.details?.age); // undefined
