// 書籍では直前のrecipe_039_1で宣言したmyFunctionを流用していますが、単体で動くよう再掲しています
function myFunction<T>(arg: T): T {
  return arg;
}

myFunction("鈴木"); // "鈴木"
myFunction(200); // 200
