// 単体ファイルの構文例です。実行時は ./utils が解決できる環境が必要です。
import("./utils")
  .then((module) => {
    console.log(module.formatMessage("読み込み成功"));
  })
  .catch((error) => {
    console.error("読み込み失敗:", error);
  });
