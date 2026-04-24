const getLoginMessage = (isLoggedIn: boolean): string => {
  return isLoggedIn ? "おかえりなさい" : "ログインしてください";
};
console.log(getLoginMessage(true)); // "おかえりなさい"
console.log(getLoginMessage(false)); // "ログインしてください"
