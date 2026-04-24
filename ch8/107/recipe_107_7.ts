// Recipe 107_7: abort("timeout") で中断理由を signal.reason から取得する
// 書籍との差分: 書籍ではトップレベル await を想定した記述ですが、
// 単体で tsgo 型チェックできるよう async 関数でラップしています。
async function main() {
  const controller = new AbortController();
  setTimeout(() => {
    controller.abort("timeout");
  }, 3000);

  try {
    await fetch("/api/report", { signal: controller.signal });
  } catch (error) {
    if (controller.signal.aborted) {
      console.error("中断理由:", controller.signal.reason); // "timeout"
    }
  }
}

main();
