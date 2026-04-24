// 書籍の通り、括弧なしでオブジェクトを返そうとすると SyntaxError になるエラー例
// 関数ボディとラベル文として解釈され、構文エラーとなる
const createUser = (name, age) => { name: name, age: age };
