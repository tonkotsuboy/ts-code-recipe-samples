interface User {
  id: number;
  name: string;
}

interface Admin extends User {
  role: "admin";
  permissions: string[];
}

const adminUser: Admin = {
  id: 1,
  name: "太郎",
  role: "admin",
  permissions: ["read", "write", "delete"],
};
