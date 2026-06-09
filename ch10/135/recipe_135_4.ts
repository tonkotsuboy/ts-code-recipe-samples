type DateParams = ConstructorParameters<typeof Date>;
// [value?: string | number | Date]

const args: DateParams = ["2024-01-01"];
const d = new Date(...args);
console.log(d.toISOString());

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/C4TwDgpgBAIghsCAFOAnOBbAzlAvFAYQHsA7LYVAVwGNgjUV0MJFUsAeUSIgM1gQgA+ANwAoAPTioAbQBucADaUIAfgBcUcqgCWJAOZQAPlBKUMAIwioj-RAF1Ro6qXJQ0erBviJGmHPmkAIgAmAAZggBYAWlCARhjYwLsxZzJgKAATPBMIAHdbCAAKADpS9ywAShSXIgUIYoUiPUKM4roASQBlAHlOil1miqqgA
