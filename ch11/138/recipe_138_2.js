// TypeError の例。単体実行できるよう try/catch でラップしています。
const user = { name: "田中" };
try {
  console.log(user.age.toString());
  // TypeError: Cannot read properties of undefined (reading 'toString')
} catch (error) {
  console.error(error);
}
