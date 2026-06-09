type User = {
  name: string;
  age: number;
  email: string;
};

function generateUserCard(user: User): string {
  return `
    <div class="user-card">
      <h2>${user.name}</h2>
      <p>年齢: ${user.age}</p>
      <p>メール: ${user.email}</p>
    </div>
  `;
}

const user: User = {
  name: "太郎",
  age: 25,
  email: "taro@example.com",
};

console.log(generateUserCard(user));

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/C4TwDgpgBAqgzhATlAvFA3gKClAdgQwFsIAuKOYRAS1wHMBubKfW0vAV0ICMlGcJC+KgBsyFanUYBfRpgBm7XAGNgVAPa4orXEnzAI8JAGF8iACYAKdgkRlDiAJRjKNWhiaIIwdok0ADJhwAHjMqADcoJWF8ODgUACJrJABaJVMzeIA+QJwoIIALACZMgBJ0JMQAOgJiKSCAeiLs3NygsEzAFz1AI3yyMorKlgg6+vac4PbAQ4ZAH4ZAa4Ze8ptKgSFhYdGWhtCw5qg-aUxMJQ0KKAq7G1R3HBq2eMAqTUA5hPiAGiZBskKAVlf+QREyeLAUxqAACEAAHkQwMIIJUjoQXpgZAcjrg4GoYZVhGpaBZtLp9PYTOYrDYHA56EA
