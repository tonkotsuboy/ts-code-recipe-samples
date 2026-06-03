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

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3#code/PTAEjOGQfhkNoZMOwZCe+oJyVBJDILO1CV-gKAC4E8AHAU1AFUBnIgJwCUB7AGxIF5QAiAQwBMBbASwB2bUAB92AV0pVhYtgHNxRcjjYBuLFhChAICpRYyQNYMgP+1AmgyBohkBFDIHqGQN0MgToZAlFaAFNMAQ-wCM6jIhwGBIf-TY+MSgAIIAxmFK5ADCdAI4VIygrDREYXRUXAA8FNT0TAA0oB5ePgB86ppg1vbOgFUMgGsMgB0MgOUMVoATDCiAOvKACEZY6QLKoBwRUQAK1Pzk5Hxx5ABcoaPTsfGJDMmgAN5YoMO8gosJikVagIXegGAugKABgPYMNXaA98qAvwG7oJLUiwBmHAyUp2CAADlADRBekgd1sdkAsHIPV4KJQ4L4-P6gLSAJoY7O1wfZoVgAL6VLSAf3lABSugGj5LCfcQCMI4WYCUBhAAWaQA1uFItMABTrIiLXK0LwASkWADc6HwuNtXnxPqBOSMOeQJlQpjM5gBtHkAXUFUr2ewG5C8ADoGHQ5JyAAYAEi2PNxoEZHHIw2W5GNlsF6j2DqIvxIO31DLmJrNFptdq8Dq4dCUoAEdBwjo4IpICqiHq9r1xeI0TNZ7KinM4ByEXpRYG4-HpTpd6emxv6zLCbLdxfe0nLWg7oBjcYTSadqddiuNQA
