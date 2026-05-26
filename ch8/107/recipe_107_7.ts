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
