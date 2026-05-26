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
