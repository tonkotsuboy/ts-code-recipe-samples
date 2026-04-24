type BaseUser = {
  id: number;
  name: string;
};

type AdminUser = BaseUser & {
  role: "admin";
};
