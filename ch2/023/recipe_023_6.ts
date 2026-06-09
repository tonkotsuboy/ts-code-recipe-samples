type User = {
  name: string;
  profile?: { settings?: { theme: string } };
};

const user1: User = {
  name: "鈴木",
  profile: { settings: { theme: "ダーク" } },
};
console.log(user1.profile?.settings?.theme); // "ダーク"

const user2: User = { name: "田中" };
console.log(user2.profile?.settings?.theme); // undefined

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/C4TwDgpgBAqgzhATlAvFA3gKClAdgQwFsIAuKOYRAS1wHMBubKMRAewDMqAbCAfjPTkIwYDVpx+GKMAAWEYmQrU6UAL5rGqxpgDGrXBSgBXBIgCMZeElQYmBBVABEgFiTAFOaOANExYdupKQgiYnAC0nIOjoADDIA-DID1DI5qal5auvpwrDwAdFystAAUJkhmmT6cPLyZgaJ0Epmy8hAAlPRQAPStTjHxmKkGwMamAEyWpjaC9v6OgAyugLRyCSl6BhkQ2bkFQyVsZXyVwtXiFfXEzW0dRrgAJhCcuBAXQA
