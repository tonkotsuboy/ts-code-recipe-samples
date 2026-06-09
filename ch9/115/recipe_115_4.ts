const result = [12, null, 24, undefined, 48].filter(
  (value): value is number => value != null,
);
console.log(result); // [12, 24, 48]

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/MYewdgzgLgBATgUwgVwDawLwwNoEYBMANDGGqsfgCzHJgAmCAZgJZgJ3GUAcAugHQt0COAAoAUDBgiAbgENUyBAEoAXDDkKEMZhBLIAtgCNhMDAD518xTACEWUqnJilAbjGhIIVAj6oQAcxFEFHRXGAB6cJwCCmoYbh4gA
