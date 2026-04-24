// else ifを使った書き方
function getAgeCategory(age: number): string {
  if (age < 13) {
    return "子供";
  } else if (age >= 13 && age < 20) {
    return "10代";
  } else {
    return "大人";
  }
}
