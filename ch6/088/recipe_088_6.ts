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

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/C4TwDgpgBAqgzhATgBUQewGYEsA20C8UA3gFBRQB2AhgLYQBcUcwiWFA5gNxlTp4D8jZqw7cAvtxIYArhQDGwLGgpQAJhDhzWAIwjwkAClLlqdRqqxwwOKiABytCABoefAlABEgJoZAnQyAJhkAzhkAfhkA2hiCPFzFGfRR0bDwASmIeOWU4NDwAOhw0dgMAAwASIgsrG3tHMUBVBkBkhkA7BkBKK0AFNMB7BmK3MUBzBkBNBnyE8RISdU0dPQREI0pHRg9ARXNABlcPKDF+qAB6Nd4MiEAZBkBAd0BTVyrAGIZAfQZAFg1ACBVAIIZAcYZAVYZASoZAa4Y-QBIFTsAvxUBspSGNLSwuhik1MDE8gA2swDSVhEtngZoBC70AYC6AUAClitOOtNoAfFUAzgyfQDqDIAXBU6bkASQyAKDlAB9mgFkGIA
