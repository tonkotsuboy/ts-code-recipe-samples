type NoChange = Exclude<"a" | "b" | "c", "d">; // "a" | "b" | "c"

const sample: NoChange = "a";
console.log(sample);

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3#code/C4TwDgpgBAcg9gYQBYEMB2BzaBeKBRADwGMAbAVwBMIAeAIhVqgB8paAjRl2o2gGlYq0AfAG4oAenGsGzVh1ndaAKCVE4aAM7AoGlAFswJCAC5YiVJhzTaI1eo1wjAOhJwMACl0GjAShFA
