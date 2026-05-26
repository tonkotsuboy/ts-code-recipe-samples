interface User {
  id: number;
  name: string;
}

interface Admin extends User {
  role: "admin";
  permissions: string[];
}

// エラー。idプロパティが不足している
const adminUser: Admin = {
  name: "太郎",
  role: "admin",
  permissions: ["read", "write", "delete"],
};
