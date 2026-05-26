const task1 = (): Promise<string> =>
  new Promise((resolve) => {
    setTimeout(() => {
      console.log("Task 1 completed");
      resolve("Task 1 result");
    }, 1000);
  });

const task2 = (resultFromTask1: string): Promise<string> =>
  new Promise((resolve) => {
    setTimeout(() => {
      console.log("Task 2 completed, using:", resultFromTask1);
      resolve("Task 2 result");
    }, 1000);
  });

task1()
  .then((result) => task2(result))
  .then((result) => {
    console.log("Final result:", result);
  });
