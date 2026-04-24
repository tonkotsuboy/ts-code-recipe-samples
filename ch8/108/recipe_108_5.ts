// Recipe 108_5: withResolvers を使ったイベントベースの非同期処理
function waitForClick(): Promise<void> {
  const { promise, resolve, reject } = Promise.withResolvers<void>();
  const button
    = document.querySelector<HTMLButtonElement>(".submit-button");
  if (!button) {
    reject(new Error("ボタンが見つかりません"));
    return promise;
  }
  button.addEventListener(
    "click",
    () => {
      resolve();
    },
    { once: true },
  );
  return promise;
}

async function main() {
  console.log("ボタンのクリックを待っています...");
  try {
    await waitForClick();
    console.log("ボタンがクリックされました！");
  } catch (error) {
    console.error("クリック待機中にエラーが発生しました:", error);
  }
}

main();
