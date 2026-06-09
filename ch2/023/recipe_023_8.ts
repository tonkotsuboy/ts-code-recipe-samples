type User = { name?: string };

function getUserName(users: User[] | undefined) {
  return users?.[0]?.name;
}

console.log(getUserName([{ name: "鈴木" }, { name: "田中" }]));
// "鈴木"
console.log(getUserName(undefined)); // undefined

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/C4TwDgpgBAqgzhATlAvFA3lAdgQwLYQD8AXFHMIgJZYDmUAvgNwBQzAZgK5YDGwlA9lig0IweEgBy+CAAoOCRHFLjEAbQC6UAD5QuAEwhtqEPQEoMzKFESiOiIfKRxCAOlUAGda9wEW9VtyCcPwANhAuIfw0MiJiClIEMqqYPhCkAESALEmAFObpDAA0GNjSGYAMroC0cnn06qamLAD09VBZucyBWMFhEVExoioJsvqGxmZ1UI26WAZGWCZAA
