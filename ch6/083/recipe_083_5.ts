// 書籍の通り、必須引数の前にオプショナル引数を配置するとコンパイルエラーとなる例
// エラー: A required parameter cannot follow an optional parameter
function greet(name?: string, greeting: string): void {
  console.log(`${greeting}、${name}さん`);
}
