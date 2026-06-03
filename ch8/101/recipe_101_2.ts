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

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3#code/MYewdgzgLgBFCGEDWBGGBeGAKAlALhgAUAnEAWwEsIBTAHmmIrAHMA+DVgKBhjGoHcipSjSxZi1CCAA2AN2o4OMAN7ceMGlAAqFMtRABXKGMXp2q9etCQZ1AHTSQzLACItiJDDSgyAB2nUUNQAJi44ANxqlhJSctSu7sheMDEG0lBhkZYAvgA0XgAMRRFq2SWc1tBwHgBMGNip6QBiwomoBAxMzPhC5FR0nSzsZmp8giR9ouKSMvKm5lEagTp6hsa4ShaWMJW2Dk4JHjB1Pv6BIfkGEF14LvmNUC3kbSgl2ykzcYdJdQ+Zi3lCsUsjAypFOAhkChcGo7FAABbUMBiB7zarIGrTCBpKA4HCwhFIlGSHForY8XYBfbOFxNJjwaQfbHpW73EnpN6giJAA
