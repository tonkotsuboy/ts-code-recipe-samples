const controller = new AbortController();
const cancelButton = document.querySelector(".cancel-button");
cancelButton?.addEventListener("click", () => {
  controller.abort();
});

fetch("https://api.example.com/data", { signal: controller.signal })
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    if (error instanceof Error && error.name === "AbortError") {
      console.log("リクエストがキャンセルされました");
    } else {
      console.error("エラーが発生しました:", error);
    }
  });

setTimeout(() => {
  controller.abort();
}, 3000); // 3秒後に自動キャンセル
