// 推奨：明示的な条件分岐
function displayName(name: string | null) {
  if (name === null || name === "") {
    return "名前未設定";
  }
  return name;
}
console.log(displayName("")); // "名前未設定"
console.log(displayName("田中")); // "田中"
console.log(displayName(null)); // "名前未設定"
