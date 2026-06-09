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

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/MYewdgzgLgBFCGEDWBGGBeGAKAlBgfAFAwxgCmA7jAAoBOIAtgJYRlZa1kQgA2AbmTzoiJEqygAVJgzIgArlHZD8MTt35sARBMRIYaUAwAOPMlDIATTTgA0+gAyPbxGDgDchUJFgJkAJgxsZRdyKjpGFjYsAH07TgArMmAoYNEYcSkZeUVcAlUyROSsbV0YAIAzeCZTK1syx3tnEndPcGg4XQBmQNzhEMoaemZWdjVeAVTRDOlZBSU8sY1inWQYbsMTM0trO06GptcPQnDhsgA6eB4eAGUzKBqsAG1fVFw7F783juRO3ABdHBnKAACzIYFGXDkPCgEGUMAA3i41FCYWdyiBaABReDAYEQiAouxMMAWMgADzhiLSTHK2GR0LO0HgUDkEAw6EwmnKUPK1Rq1gRLjSXnU5x4IAA5lgAAYrPQAEnhxNJZJgAGp9ABfdJyYDALgQbk8ABcMEV9KgZz4lzkZE10paaW1ZB4rEFaRIIt4YslMrlZqVJPJ6q1MEq1UspvNkIZnEQ4HtjtEmpcmpaabcQA
