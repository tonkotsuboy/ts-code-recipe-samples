async function main() {
  const controller = new AbortController();
  try {
    await fetch("/api/report", { signal: controller.signal });
  } catch (error) {
    if (error instanceof Error && error.name === "AbortError") {
      console.log("リクエストがキャンセルされました");
    } else {
      console.error("エラーが発生しました:", error);
    }
  }
}

main();
