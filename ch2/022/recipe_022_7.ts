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

// ブラウザ上で編集できます
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/C4TwDgpgBAqgzhATlAvFA3gKClMiD2AZgJYA2EA-AFwbY5QB2AhgLaU1zCLEMDmA3HQC+gkZkyEArgwDGwYvgZReEYPCQA5VhAAUkhIhrrEASg5cevWjkSrJiJfqQA6PETKVnzNlAoUoAESAsCqAskqAVOaAtFGAWdoBouIqagZabDrouAQk5DRp3hA0AYAMroC0cgFQQmUm-FAA9NVQxZgJxsm66EKVNXWhkVFAA
