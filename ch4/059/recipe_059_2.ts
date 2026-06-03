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

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3#code/GYVwdgxgLglg9mABBATgUwIZTQZTREdAFTgGs0wAKAGwoHMoALRAXkQGYAmASgC5EAzlBQwwdRAG8AUImQIhiAEYBPbANaIwaAO6IAqqKgAOAIIoUGZTXpNuAbhnIUygA5Q4AOjpooAJQxgACZwALYAahjUIGgClCpq9o7oUIRIZhbKHsAooXGqMQA0jrJ52NysAHxK+R7uOMKidJQAjABs3B4uGIH1GChQlJwFiABEAAwj3B0AVnCilMWjI0WyiQC+UlIQ8nC0HtRwTaiY2HgExGQUlFMOAPS3iIDR8vyKYxBGzRjAY2gAnEaKdjAACsRg84MCvzGABZAs1fuxoRBABD-rWhgHDTQDq2oBIf6AA
