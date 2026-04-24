type UserProfile = {
  name: string;
  role?: string;
};

function describeUser({
  name: displayName,
  role = "ゲストユーザー",
}: UserProfile) {
  console.log(`${displayName}さんの権限は${role}です`);
}

describeUser({ name: "村田" }); // roleが省略された場合もデフォルト値で出力
describeUser({ name: "高橋", role: "管理者" }); // 呼び出し側でroleを上書き
