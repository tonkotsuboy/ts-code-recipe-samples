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
