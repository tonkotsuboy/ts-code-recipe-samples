const userId = Symbol("userId");
const otherId = Symbol("userId");
type User = {
  [userId]: number;
};
const user: User = {
  [userId]: 123,
};
const id1: number = user[userId]; // OK
// const id2: number = user[otherId];
// エラー: Property '[otherId]' does not exist on type 'User'.
console.log(id1, otherId);
