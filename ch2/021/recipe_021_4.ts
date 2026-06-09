const users = [
  { id: 1, name: "鈴木" },
  { id: 2, name: "田中" },
  { id: 3, name: "佐々木" },
  { id: 4, name: "後藤" },
];

for (const user of users) {
  if (user.id === 3) {
    console.log(`ユーザーが見つかりました: ${user.name}`);
    break;
  }
}

// 実行結果: ユーザーが見つかりました: 佐々木

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/MYewdgzgLgBArhApgJwjAvDA2gKBjAbxgEsATALhgEYAaGMAQwFtFKAiQFiTAKczZgF8aeQiQowATHUYt2gBldAtHK8BQomUoBmSc1Yw2gBXlAoAw9+g-CtEAWTdJ2AY-UAnoYsEBdANw4cAMxDIYAClCQsAgoMCAe8EioAJSEQsThvsHIAHRkGOiYajEEQvgBECAANojJhSAA5r4ABoBnDIA-DIBtDHWAMgyA0ZGAJgyA0gyAUQyAfgyA6gyA+gyUACQESclSiHxVUW74+ABGyIgMANbz-Dh87gD0uzCA+dqAMhGACr6AOeaU9U1tXX1DlAZcQA
