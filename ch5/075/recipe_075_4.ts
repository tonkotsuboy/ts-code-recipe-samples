const user = {
  name: "田中",
  profile: { age: 18, hobby: "読書" },
};

const updatedUser = {
  ...user,
  profile: { ...user.profile, age: 21 },
};
console.log(updatedUser);
// {name: "田中", profile: {age: 21, hobby: "読書"}}
