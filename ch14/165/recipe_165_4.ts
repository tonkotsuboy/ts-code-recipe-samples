type User = {
  profile?: { name?: string };
};
const user: User = {};
const userName = user.profile?.name ?? "匿名";
console.log(userName);
