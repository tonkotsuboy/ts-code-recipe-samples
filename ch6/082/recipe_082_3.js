const person = {
  name: "太郎",
  greet() {
    setTimeout(() => {
      console.log(`こんにちは、${this.name}さん`);
      // thisはpersonオブジェクトを参照する
    }, 1000);
  },
};

person.greet(); // 出力: こんにちは、太郎さん

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&filetype=js&checkJs=false#code/MYewdgzgLgBADgUwE4XDAvDA3gKBjMAQwFsEAuGAIkCpNQOYTKAaPGAcyQQSgAoBKbZ-BE4AVAJakQAV268MAPn74lMUJBAAbBADp1IFlwAGgZQZAyQyBrBkCGDIHsGQIAMAEixQAFqIhaipAL6BVBhMGeANwCSgD0ITDOrlaIKOCAVQyAawyAHQyA5QyA9QyAEwyASQyAQ8qA5o6AmgyA0QzBngwwAIwADDWBzGU4nkE4MahgWmwc3IEwYTCAX4qA2UoUppa2dL5AA
