// エラー: A required parameter cannot follow an optional parameter
function greet(name?: string, greeting: string): void {
  console.log(`${greeting}、${name}さん`);
}
