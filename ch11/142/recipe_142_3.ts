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
