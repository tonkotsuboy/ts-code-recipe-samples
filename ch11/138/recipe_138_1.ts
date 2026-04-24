// 書籍そのままだと throw で落ちるため、try/catch で包んで単体実行できるようにしました。
try {
  throw new Error("予期しない問題が発生しました");
} catch (error) {
  console.error(error);
}
