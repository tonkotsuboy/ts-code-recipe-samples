// アンダースコア始まりの引数は noUnusedParameters でもチェック対象外です。
function greet(message: string, _unusedParam: number) {
  console.log(message);
}
