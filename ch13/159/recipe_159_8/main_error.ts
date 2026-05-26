async function demoError() {
  const utils = await import("./utils");
  utils.nonExistentMethod();
  // エラー：Property 'nonExistentMethod' does not exist
}

demoError();
