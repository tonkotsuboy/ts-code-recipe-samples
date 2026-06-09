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

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/C4TwDgpgBAqgzhATgBUQewGYEsA20C8UA3gFBRRYAmAXFAHYCuAtgEZIDcZ9AhkxLXGCIsdAOadyEJt1wChI8SQC+nEqEiwEKdNjwB1LMAAWaBsACSlKIQDyTQwB54SVJlwQANFABEVbwD5VAGM0OkEoBi1XXX5NFx13A2NTCytCUnIqWgBGLwB6PKhACoZAS4ZAH4YuOl5Y70AGV0BaOShAKk1AOYTvDy4pGRxab2BuKoBrbgABCAAPXjA8ADoQpnblYNC4NFmcNFEACkj4tzwASnYgA
