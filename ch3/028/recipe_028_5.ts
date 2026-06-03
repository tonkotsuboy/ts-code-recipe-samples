// ユーザー情報の型
type User = {
  id: number;
  name: string;
  age: number;
  address: {
    city: string;
  };
};

const myUser: User = {
  id: 1,
  name: "太郎",
  age: 20,
  address: {
    city: "東京",
  },
};

// ユーザー情報を更新する関数
const updateUser = (user: User): void => {};

// ブラウザ上で編集できます
// https://www.typescriptlang.org/play/?ts=6.0.3#code/PTAEjOGQfhkNoZMUYNCMGoOwZDR6gKAC4E8AOBTUAVQGc8AnUAXlAG81RQBLAEwC5QA7AVwFsAjcgG56nAIY887YhjKMOAc2ENR8yZ14CyS0KObMyeYsXZ0GDAMaNsUmXMUiAvsKdo05gPYdpoHlhLl2fwpqUyY2UABGABoRDnE1ACJAKk1AOYSEmOVVdgAmAAYMnT0DIxMRCyssdgTAR3NAGrl0xxiXNBAIGHgEQCSGQBezQAbTQE0GQGiGQCLUwAdTN09vLhxmUQw8IKpQAAouUjJA9YBKdgA3dxYqAD5aJyA
