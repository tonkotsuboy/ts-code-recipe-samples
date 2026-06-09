function* range(start, end) {
  for (let i = start; i <= end; i++) {
    yield i;
  }
}

for (const num of range(5, 8)) {
  console.log(num);
}
// 5, 6, 7, 8

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99&filetype=js&checkJs=false#code/GYVwdgxgLglg9mAVAAgE4EMwHMCmAKAZynVSgBpkcwATASmQG8AoZZYOVZPAGxymRjIAvMiIkoAbgHIAPCKrUpMANTL6zVqwCeMHN2oCJLZAF8mZpu054ICIsjAgAtsjjA0mXHgCsFABy06sa2YARwvAB03HBYeI5OtEZmAPTJyL7IAGwUAOz+QA
