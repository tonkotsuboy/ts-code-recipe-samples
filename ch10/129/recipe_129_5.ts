type User = {
  id: number;
  name: string;
  email: string;
};

const users: Record<number, User> = {
  1: { id: 1, name: "鈴木", email: "suzuki@example.com" },
  2: { id: 2, name: "田中", email: "tanaka@example.com" },
};

// ユーザーの部分的な更新を許可する型
type UserUpdate = Partial<User>;

function updateUser(userId: number, update: UserUpdate) {
  const user = users[userId];
  if (!user) {
    throw new Error("User not found");
  }

  // ユーザーオブジェクトを更新
  users[userId] = { ...user, ...update };
}

// ID: 1のユーザーの名前のみを更新する
updateUser(1, { name: "田中" });
console.log(users[1]);

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/C4TwDgpgBAqgzhATlAvFA3gKClAlgEwC4oA7AVwFsAjJAbm1IEMKJi5hFcSBzenCCo1wAbNhy69MAX3qYAxgHsS7KGQSI4xAEoRFifAB5y1JABpY6gHyoMDAIzF0eIlDvmSzVlABEgFiTAFObe5gJCoj5wZABeZADWuAACEAAezGDCEAB0ihTeUFKmDABMjs7Ehe6exN6ADK6AtHJBUCEiVcCMHjGMiSkUaZnZufnSsgD0w1CAZwyAPwyAbQyTgHYMgBcJgGBKgCFugFYMgC9mgA2mgEkMgIxRgPfKgJoMgNEMgNHqmKCQFkgwYPiMwNBoAAqMiMC4jMIG8EiWsgAZmQSHJPkpVPdHhA-ogABRqJAASRcxhoiHMZChT2IsLuDyeAEpbDhFMpgKp1DZERoANo0lEAXT4eEBUDhAEIacSsDgcMAABaIBQAd1IEDFAFFEML4d5YaQFBTAQoQfhvISWVJMAxRhMZpNAFUMgDWGQAdDIByhkA9QyACYYdtsGDS4PT1EybE4Mh6aeYPRksQToDJpDq9UiACLEOxzKazOaAWBVALJKc0A-gx2ranTB+6GwuFuDBMFhVOoDTXyJRwBTpDLCBTcBHqJ12RmaoA
