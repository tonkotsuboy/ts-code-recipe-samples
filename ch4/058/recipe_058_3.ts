function countGraphemes(text: string): number {
  if (
    !("Intl" in globalThis)
    || typeof Intl.Segmenter !== "function"
  ) {
    throw new Error("Intl.Segmenterに未対応の環境です");
  }

  const segmenter = new Intl.Segmenter("ja",
    { granularity: "grapheme" });
  const graphemes = [...segmenter.segment(text)].map(
    (segment) => segment.segment,
  );
  return graphemes.length;
}

console.log(countGraphemes("👍🏻🙂")); // 2
console.log(countGraphemes("👩‍👧‍")); // 1
console.log(countGraphemes("👨‍👩‍👧‍👦家族")); // 3
