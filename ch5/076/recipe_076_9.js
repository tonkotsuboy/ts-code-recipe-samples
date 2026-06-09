const formData = {
  user: { name: "田中", email: "tanaka@example.com" },
  settings: { theme: "dark", notifications: true },
  lastModified: new Date(),
};

const backup = structuredClone(formData);

// ユーザーがフォームを編集
formData.user.name = "佐藤";
formData.settings.theme = "light";

// キャンセル時に復元
const restored = structuredClone(backup);
console.log(restored.user.name); // 出力: "田中"

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99&filetype=js&checkJs=false#code/MYewdgzgLgBAZiATgWwCIEMrpgXhgbwCgYYBXCAU0QC4CYx1kLaAiQBldBaORYBoYLl0ASwA2rLAwDW6AAIUAHowAOwigDpQyFjAC+3YjEpQogsAHMItfDCgALfsxgsAJukQSe9EMbiDgmQeAW1oikFDp6JMLo0ACyIE6CPhROtGAUAO4wGFAUABQAlHraANyEhKCQsABG6MASpIq4BlAhwFCkiMkAwsLgeQgo2ej5pYQA9GMwgGcMgD8MgG0MM4AyDICrDICVDDOABwyASQyAF76AY2mEA2iY6KrkVKoMTE0sgArygCehLKVHQ6qGxmYQqrb2N8KCphsUCeZQmMEAtQyAY4ZAM8MgG6GQDXDIAhM0A1gyASv1AMKK5UCsE60CQySa0Fa7U6Th6fVyNTqDRGWMgIBUql6plyuKg+KcZ0oiEujAoIxgYMAX4qAbKVWJwWEA
