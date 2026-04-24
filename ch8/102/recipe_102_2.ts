// Recipe 102_2: Promise.allSettled で成功・失敗を問わずすべての結果を待つ
const task1 = () =>
  new Promise((resolve) =>
    setTimeout(() => resolve("Task 1 completed"), 1000),
  );
const task2 = () =>
  new Promise((_, reject) =>
    setTimeout(() => reject("Task 2 failed"), 2000),
  );
const task3 = () =>
  new Promise((resolve) =>
    setTimeout(() => resolve("Task 3 completed"), 3000),
  );

Promise.allSettled([task1(), task2(), task3()]).then((results) => {
  results.forEach((result, index) => {
    if (result.status === "fulfilled") {
      console.log(`Task ${index + 1} successful: ${result.value}`);
    } else {
      console.log(`Task ${index + 1} failed: ${result.reason}`);
    }
  });
});
