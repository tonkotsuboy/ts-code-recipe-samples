// APIから取得したユーザーデータの型（nullやundefinedの可能性あり）
type UserData = { id: number; name: string } | null | undefined;

// NonNullableで確実に値がある場合のみ受け取る関数
function displayUserInfo(user: NonNullable<UserData>) {
  // userは必ずオブジェクトなので、安全にアクセスできる
  console.log(`ID: ${user.id}, Name: ${user.name}`);
}

// APIからデータを取得（仮）
const userData: UserData = { id: 1, name: "田中太郎" };

// nullやundefinedチェック後に使用
if (userData != null) {
  displayUserInfo(userData); // OK: nullやundefinedが除外されている
}

// displayUserInfo(null); // エラー: null は受け付けられない
