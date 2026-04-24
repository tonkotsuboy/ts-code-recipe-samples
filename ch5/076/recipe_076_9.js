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
