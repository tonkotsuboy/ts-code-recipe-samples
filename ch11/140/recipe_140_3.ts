async function fetchUser(id: string) {
  const response = await fetch(`/users/${id}`);
  if (!response.ok) {
    throw new Error(`HTTP ${response.status}`);
  }
  return await response.json();
}

async function main() {
  try {
    await fetchUser("missing");
  } catch (error) {
    if (error instanceof Error) {
      console.error(`取得に失敗しました: ${error.message}`);
    }
  }
}

main();

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3#code/IYZwngdgxgBAZgV2gFwJYHsLwKbKgCwFURsAnAClQBMAuGEZU1CAcwEoYBvAKBhikwMYpbCAAOg7DAC8MYAHdgqZDjz5yAAwD0CEqRBaAJJ2oBfDWwDcvGKjgxyAQhHjJAOnQBrDjz59k+KTo8jAQ2CEAoqRBFBoAEgAqCQAKMMYuEhAkbgzAyLrmVjamNiL5pFgKSioZ7gBWIJjkRSXcoJCwiCgYWAC2ShDNXDaMYMN+corKqgTEZOQARL2oICDMLAtFfKb8eQQOZDE+Nnx2B9HopLZZyMDQ2Oj2UUfjE-yC6AA22G6Hl5qANeVAOn6gGsGQCMmoB1U0A6gyAPwYoYB9Bjoxj+pDcvVEIGALGwhWsExK224rX6zGaliAA
