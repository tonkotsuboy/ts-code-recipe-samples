// 実行時エラーの例（コンパイルは成功する）
const user: any = { name: "田中" };
console.log(user.profile.email);
// TypeError: Cannot read properties of undefined
