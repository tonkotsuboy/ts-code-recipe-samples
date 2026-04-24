// Error.cause を使わない場合の「元のエラーが失われる」例。
// 書籍では fetchUserData 定義と getUserProfile/example 関数が左右ページにまたがって
// 掲載されていますが、単体実行できるよう1ファイルにまとめています。
// 下位レイヤー：API通信を担当
async function fetchUserData(userId: string) {
  const response = await fetch(
    `https://api.example.com/users/${userId}`,
  );
  if (!response.ok) {
    throw new Error(`HTTP Error: ${response.status}`);
  }
  return await response.json();
}

// 上位レイヤー：ビジネスロジックを担当
async function getUserProfile(userId: string) {
  try {
    const userData = await fetchUserData(userId);
    return { name: userData.name, email: userData.email };
  } catch (_error) {
    // 問題：元のエラー情報が失われる
    throw new Error(
      `ユーザー ${userId} のプロフィール取得に失敗しました`,
    );
  }
}

async function example() {
  try {
    await getUserProfile("999"); // 存在しないID
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
      // "ユーザー 999 のプロフィール取得に失敗しました"
    }
  }
}

example();
