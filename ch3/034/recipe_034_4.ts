interface BaseUser {
  id: number;
  name: string;
}

interface AdminUser extends BaseUser {
  role: "admin";
}
