const user = { name: "田中" };
try {
  console.log(user.age.toString());
  // TypeError: Cannot read properties of undefined (reading 'toString')
} catch (error) {
  console.error(error);
}

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&filetype=js&checkJs=false#code/MYewdgzgLgBArhApgJxgXhgbxmAhgW0QC4YAiQBldBaOVJgF8BuAKCmQE8tGYZRIQAbRADo+IAOYAKBCkG5RQqCADKLAJZgJASg1MuAel0wAKqwAOiAKLJkIZCQDCuMGBCxkiXABMYJ62eRQVRAgYEAAzeDAPRFC1RC9xN081URgAcgVlZGTUjUZablwoYAALGHEUa2QNDi4eCH4hCptyqxttPKA
