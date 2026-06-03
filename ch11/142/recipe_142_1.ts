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

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3#code/PTAEmg5RZeUG4ZBKGQThkD8Mgsf4IIAUCSgsBMIfygkhkFGjQZX0AoAQwGcBPAOwGNQAzAVwYBcBLAe1uYFN29ABYBVSvwBOAEXLtyAChYTJmACYAuUJXaTOtAOYBKUAG9SoUPV47Qk-pQAON-qAC8ocgHdyndgKFhBQtLUAADYXZ2R0oNEHJHTgA6fgAPcgBbRwAbfiTrDOBlKUpgABJTYtU1AF8wgBoQowBuEM4mUAUAQnsnFyTuAGsTc1DQdmFJbi9QWn4ZgFFJKckFMIAJABVN9FAlla0K3udaCSSdOWU6lpCakPt2Fkk+b19-Y-6AK0peBRu70ggUCAKDkYAgUIBlhkAHQyAWYZAJ0MgFuGKGAYYZAPUMRDIVDojFYHB4fAMgnEUnQUyYnFyShU6i0Oj0hhGIV01DMIUs1lO-iqsnk7k8Pj8ARExJkckUVXUNzGDyefFMs0y-C03LFSVoivqoH4GV82WVKh55BSOopoBqrUsNSschEnQA+lIVoyxkDAPKqgBkM5CAYUVAHYMgAqGQCXDIhAKMGgEYNQAyDIBGTUA8QyAGIZANEMbPGk2ms3me2W3FWScsYUAZwyIQBtDIhQBUJbVQD7AOsMCMAqwyAYoZEIBrhkAa8qAdP1ANYMkcA6qaAdQZAH4MvcA+gwNJNSs2kAFYhjMNj0Li8LXpLKU53jSQs0ahV6CwnsEWk7jkykAIgAnBeTy1QEDABragAp1XuAKwZACIMmGkt2tgU6jqza8s7Q-pmkigPoFwMPwR4Zk6rJjOyNjcLkSTZNwBgKL+khJBkDiUOQhLji6YAngWxagBeZ6VjWDbNu2XZ9oOQ4nkmdyWpOpCkGkmQ5PwfzNEAA
