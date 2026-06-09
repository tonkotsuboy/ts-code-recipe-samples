function deleteLastGrapheme(text: string): string {
  const segmenter = new Intl.Segmenter("ja",
    { granularity: "grapheme" });
  const graphemes = [...segmenter.segment(text)].map(
    (segment) => segment.segment,
  );
  graphemes.pop();
  return graphemes.join("");
}

console.log(deleteLastGrapheme("👍🏻🙂")); // 👍🏻

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/GYVwdgxgLglg9mABAEwKYBtVVQGQIYDOUA4gE54AOAFqgLaoAU2AHlAFyJGkxgDmAlBy49eiAN4AoRIggIinVL3phspRAF5EYVAHdEASRXoAdAGVFy1QwBEAKzzWANFOnjEvcmBDo83KAE8Oaw9KGnprRABffgBuF1kweRDqOlQCDUQAbWMcggtUFVRSYzylAqgmVFZ+AF1jWkoGF2kGUst+DQA+BTKVEvyVZ2lYl2SwtOMKOAoGEelSLBBSJDHUgmNbOB4baxHIiQkEgjhMY3Q4XgY0TGx8IjJQ1JtAXg3AWR3AHg3Ab-3nwCE93djEAB6QGIN5fIA
