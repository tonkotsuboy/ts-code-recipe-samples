// 下位レイヤー：API通信を担当（変更なし）
async function fetchUserData(userId: string) {
  const response = await fetch(
    `https://api.example.com/users/${userId}`,
  );
  if (!response.ok) {
    throw new Error(`HTTP Error: ${response.status}`);
  }
  return await response.json();
}

// 上位レイヤー：ビジネスロジックを担当（Error.causeで改善）
async function getUserProfile(userId: string) {
  try {
    const userData = await fetchUserData(userId);
    return { name: userData.name, email: userData.email };
  } catch (error) {
    // 元のエラー情報を保持しながら、コンテキスト情報を追加
    throw new Error(
      `ユーザー ${userId} のプロフィール取得に失敗しました`,
      {
        cause: error,
      },
    );
  }
}

// 使用例
async function displayErrorChain() {
  try {
    await getUserProfile("999"); // 存在しないID
  } catch (error) {
    if (error instanceof Error) {
      console.log("メインエラー:", error.message);
      // error.causeも型ガードで確認する
      if (error.cause instanceof Error) {
        console.log("原因エラー:", error.cause.message);
      }
    }
  }
}

displayErrorChain();
// メインエラー: ユーザー 999 のプロフィール取得に失敗しました
// 原因エラー: HTTP Error: 404

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/PTAEmg5RZeUG4ZBKGQThkD8Mgsf4IIAUCSgsBMIfygkhkFGjQZX1AIf8EhNQF7NArBkHUGQSH+AoAQwGcBPAOwGNQAzAK48ALgEsA9p34BTYdwAWAVVbSATgBFmw5gAoBK1ZgAmALlCthq0ZwDmASlABvRqFDdJF0KumsADh+lQAF5QZgB3ZlFhGTl5HRdXUAADeWFhX1YTEGZfUQA6aQAPZgBbXwAbaTz3EuB9NVZgABJHesMjAF8kgBoEuwBuBNE+UB0AQm8-ALzxAGsHZ0TQYXlVcTDQTmkNgFFVNdUdJIAJABVT9FA9g7MWyf9OFTyLLX0ugYSOhO9hAVUpcKRaL3aYAK1Ykh0Hy+jBAoEAUHIwBAoQDLDIAOhkAswyAToZALcMaMAwwyAeoYiGRruJVNVmPVAOYMgE5TQAhqkw2FxeIIRBIpDZZMo1Og1nxRJU9AZjGYLFZbAsEpZ2E4Eq53I9om1NNpgqEIlEYgoeRotLo2sYPksfn8pI5NqVpGYVfq8pwrd1QNISpFyjaDKrmAVXYLQB1Bq4Om4tApRmoDlKlnDAMKKgDsGQAVDIBLhkQgFGDQCMGvhALvygEBjWjUQAyDIBIhkAgAyAZoZAM8MgDGGQC1DFjABMMGfwgF-4wAFSvLlqt1pttld9uT4ktXElAGcMiEAbQyIUAtQ2dUBxwDrDDjAKsMgGKGRCAa4ZAGvKgHT9QDWDIBGTUA6qa0QB+DLRAPoMPQ7rkWQ4VVJUZgj5N6946b8Sxv9jBhcMA-vKABSugDR8iwHA8PwQjcGIkigEYoh+OUzDsGSqgAMLyJEnBQnKrgyrhiSAlqXLCLqfLiAKQoAEQAJx0VRAygHCgAa2oAFOr5oAIgyYOonwhrE4b9qoUaJMMAkHKA1gvDw0gUX2kYEUsioQpUeTlOINg6FRgCHDLAFbJogJhUU6L4UiUPisMwXLftGYAmZS9SAEEMgDR6oANQyIIAkwzUoAXR6ALFRgCaDIA0Qw3hJIw6HZ3CPoEknaNJsmocJ95KeIKlqRpVGAPnKgAHavphnGYJ9lPGZrAWVZgZDl8SwVT+MLwYhyGoRhWFQoMcI6XpKZmGOk6gHRNHzkua6bruh4nueF6wmAWU5aAZwXHJ5JmAALAADItQA
