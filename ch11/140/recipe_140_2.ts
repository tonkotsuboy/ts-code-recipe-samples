// Promise.then 内部で発生したエラーは同期の try/catch では捕捉できないことを確認する例。
// catch (error) は未使用扱いのため、unhandled rejection のログが残ります。
try {
  Promise.resolve().then(() => {
    throw new Error("then内のエラー");
  });
} catch (error) {
  console.log("ここには到達しません", error);
}
