try {
  Promise.resolve().then(() => {
    throw new Error("then内のエラー");
  });
} catch (error) {
  console.log("ここには到達しません", error);
}
