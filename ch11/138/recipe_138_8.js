Promise.any([
  Promise.reject(new Error("エラー1")),
  Promise.reject(new Error("エラー2")),
]).catch((error) => {
  console.log(error); // AggregateError: All promises were rejected
});
