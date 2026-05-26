type User = {
  profile?: {
    name?: string;
  };
};

function getUserName(user: User): string {
  return user.profile?.name ?? "名前未設定";
}

getUserName({ profile: { name: "田中" } }); // 田中
getUserName({}); // 名前未設定
