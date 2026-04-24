// 早期リターンを使った書き方
function getAgeCategory(age: number): string {
  if (age < 13) {
    return "子供";
  }
  if (age < 20) {
    return "10代";
  }
  return "大人";
}
