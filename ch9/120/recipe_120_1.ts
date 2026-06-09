type User = {
  id: number;
  name: string;
  age: number;
};

type UserKeys = keyof User;
// 'id' | 'name' | 'age'

// ブラウザ上で編集できます
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/C4TwDgpgBAqgzhATlAvFA3gKClAlgEwC4oA7AVwFsAjJAbm1IEMKJi5hFcSBzenR7q1KUaiegF96mUJFgJEAaQgg4qKAGtlAewBmcupgD0hqAHICpqAB8zJZhEs3TAh0A
