function createSecureToken(length = 32): string {
  const bytes = new Uint8Array(length);
  crypto.getRandomValues(bytes);
  return Array.from(bytes,
    (byte) => byte.toString(16).padStart(2, "0")).join(
    "",
  );
}
console.log(createSecureToken());
// 例: b0c81af0e98b3f58...d904d1934c（64文字）
