function* numberGenerator() {
  yield 1;
  yield 2;
  yield 3;
}

const myGenerator = numberGenerator();
console.log(myGenerator.next()); // { value: 1, done: false }
console.log(myGenerator.next()); // { value: 2, done: false }
console.log(myGenerator.next()); // { value: 3, done: false }
console.log(myGenerator.next()); // { value: undefined, done: true }

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&filetype=js&checkJs=false#code/GYVwdgxgLglg9mAVAAjCAtgIwKYCcDi2YeAhlHLgBQCUyA3gFDLICeM2ANgCbICMA3E1btuyAEyDmbTjwDMggL4MGEBAGcoydC0LFcZCsgC8qDDgJFS5KtUGqwauB2wA6DnADmlbbqsUXxAAeUDS2yAD04fTIAG4kHCDYAFx8ADTIXAjJyMDxatjISvaOzm6e3jqW+tYB2MGh-BFRdLHxiSli6ZnEKbkc+YUq6k6u7l4+VQa4tfXUYZHRcQnZsl1ZvXkFRcOlYxW+1f5BIXONCy1L7cjgXNjAMMRcaz3IULiJhUA
