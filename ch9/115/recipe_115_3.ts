const result = [12, null, 24, undefined, 48].filter(
  (value) => value != null,
);
// resultはnumber[]に推論される
console.log(result); // [12, 24, 48]

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3#code/MYewdgzgLgBATgUwgVwDawLwwNoEYBMANDGGqsfgCzHJgAmCAZgJZgJ3GUAcAugHQt0COAAoAUDBgiAbgENUyBAEoYGAHww5ChDACEWUqnJilAbjEB6C-CRoogewZSAWwBGw7D0DWDIArjQGtRgVQZAGIZAaIYxUEgQVAQ+VBAAcxFEFHQzGCscAgpqGG4eIA
