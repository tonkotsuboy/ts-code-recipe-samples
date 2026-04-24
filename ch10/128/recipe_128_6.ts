// ユーザーの役割を定義
type UserRole = "admin" | "user" | "guest";

// 各ユーザー役割に対するアクセス権限（boolean）を定義
type AccessControl = Record<UserRole, boolean>;

// アクセス権限オブジェクトを作成
const accessPermissions: AccessControl = {
  admin: true, // 管理者はアクセス可能
  user: false, // 一般ユーザーはアクセス不可
  guest: false, // ゲストはアクセス不可
};

// 使用例
function checkAccess(role: UserRole): void {
  if (accessPermissions[role]) {
    console.log(`${role} has access.`);
  } else {
    console.log(`${role} does not have access.`);
  }
}

checkAccess("admin"); // admin has access.
checkAccess("user"); // user does not have access.
