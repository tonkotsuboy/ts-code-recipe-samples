const mirrors = [
  fetch("https://mirror1.example.com/status"),
  fetch("https://mirror2.example.com/status"),
  fetch("https://mirror3.example.com/status"),
];

Promise.any(mirrors)
  .then((response) => response.json())
  .then((data) => {
    console.log("最初に成功したミラーのレスポンス:", data);
  })
  .catch((error: AggregateError) => {
    console.error("すべてのリクエストが失敗しました", error.errors);
  });

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/MYewdgzgLgBAtgSwE5JEiMC8MDaAoGGAMwFMpgALACgCIKooAHCALgHo3EU0BGAOhIAPAIZxGAGxJ9QcNtGFQArhBoBKADQFiZSrXpNWHLqiQAmASLGTpIWfKUqNW0uWp0Gzdp2QmAzBdEJKRk5KAVlNU0AXQBuPDwABVRECClhMABPKmM0CFUtPigKEjAqKiQSCEZwVNUsAD4YCqqaqQArCHAqVXzCQuLSqgATBWE6zEaAby1CUEgQa3EQAHNaQABzQFwlQGsGQAQjQHylQHUGQH0GQH2GQEuGQB+GQDsGQBuGQE6GQF2GQGeGO5YadRgRsNU4wgBfXowaQKXRUEjcJAsGAAQWWywqywUJAAohDxlMZjA5p1rOCTLRAJoMgE8GQBmDFdAFcMgHqGQAVDHdABMMgBkGQCMmoB1UwOgD8GY7vGB4tACCF5X4wAExIA
