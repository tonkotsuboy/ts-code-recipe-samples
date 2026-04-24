type User = {
  name: string;
  profile?: { settings?: { theme: string } };
};
const user1: User = {
  name: "鈴木",
  profile: { settings: { theme: "ダーク" } },
};
console.log(user1.profile?.settings?.theme); // "ダーク"
const user2: User = { name: "田中" };
console.log(user2.profile?.settings?.theme); // undefined
