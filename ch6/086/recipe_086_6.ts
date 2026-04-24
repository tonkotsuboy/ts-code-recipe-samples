function getValue(id: number): string | null {
  if (id < 0) {
    return null;
  }
  return `ID: ${id}の値`;
}

// 書籍では関数定義のみだが、動作確認のため呼び出し例を追加している
console.log(getValue(1)); // ID: 1の値
console.log(getValue(-1)); // null
