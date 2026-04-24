// 意図的に型エラーを発生させるデモ（TS2353: 除外済みの 'id' は指定不可）。
type UserProfile = {
  id: number;
  name: string;
  email: string;
};

type UserProfileWithoutId = Omit<UserProfile, "id">;

const userProfile: UserProfileWithoutId = {
  id: 1, // エラー
  name: "田中 太郎",
  email: "tanaka@example.com",
};

console.log(userProfile);
