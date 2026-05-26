type User = { name?: string };

function getUserName(users: User[] | undefined) {
  return users?.[0]?.name;
}

console.log(getUserName([{ name: "鈴木" }, { name: "田中" }]));
// "鈴木"
console.log(getUserName(undefined)); // undefined
