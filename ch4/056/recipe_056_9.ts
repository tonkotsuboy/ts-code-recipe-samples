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

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/MYewdgzgLgBArhApgJwJIBMYF4YGUCeAtgEYgA2AFAEQIoZUCUA3AFCiSwhQAWdmOBEuWq006Rqyj4ADohgBVJMmwwA3ixgwA2qIwBdAFwwwcEilYBfVu2jwlRxShXrNOpfqMBGAEwBmADQsVmzgtgCW6J5GJmbKOKJufHpMMAD0qTAA8gDSLOkwNrAR3tGmxE7xSlpcvGLJeRmAFQyAlwyAPwxGAArIILLIUjAA5NU8SQMw6CCIEMZcMIgAHmG24DBSsoOOyAMAdCGQ5IjbZCAA5hQRnv4wNXzMQA
