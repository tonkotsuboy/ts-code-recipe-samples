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
