const objectWithFunction = {
  name: "test",
  func: () => console.log("hello"),
};

// 関数を含むオブジェクトをコピーしようとするとDataCloneErrorエラー
try {
  structuredClone(objectWithFunction);
} catch (error) {
  console.log(error instanceof Error ? `${error.name}: ${error.message}` : error);
  // DataCloneError: ...
}
