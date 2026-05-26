async function loadUtils() {
  const utils = await import("./utils");
  console.log(utils.formatMessage("モジュールが読み込まれました"));
  console.log(utils.getCurrentTime());
}

// ボタンクリック時に動的読み込み
document.querySelector("#loadButton")
  ?.addEventListener("click", loadUtils);
