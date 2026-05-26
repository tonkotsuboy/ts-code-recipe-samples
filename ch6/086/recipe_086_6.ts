function getValue(id: number): string | null {
  if (id < 0) {
    return null;
  }
  return `ID: ${id}の値`;
}

console.log(getValue(1)); // ID: 1の値
console.log(getValue(-1)); // null
