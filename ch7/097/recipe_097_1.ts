type User = {
  readonly name: string;
};

const user: User = {
  name: "田中",
};

console.log(user.name); // 読み取りはできる
user.name = "鈴木"; // エラー: 書き換え不可

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/C4TwDgpgBAqgzhATlAvFA3gKClRECGAJgPYB2ANiFKfgLYQBcUcwiAlqQOYDcmAvr0wBjMiygBXBIibwkqDNmp1GUAESAGV0C0cqoA0-QSNJxi5CADpyxTgApJSMzXoBKblAD0bqIFqowP4MgNeVAKIZAewZAcwZAWQZAaIZMO0QHZXlVQBYkwApzVVcPKEAKhkBLhkAfhiZAD7MwwG3jQAkGQFg5QHvlIA
