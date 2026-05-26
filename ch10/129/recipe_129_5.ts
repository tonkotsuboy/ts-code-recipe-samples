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
