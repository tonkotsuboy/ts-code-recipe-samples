// 書籍: localStorage を使用するブラウザ向けのサンプル。
// Node.js で型チェックだけ通したい場合は --lib dom を指定するか、ブラウザで動かしてください。
export function issueCsrfToken(): string {
  const token = crypto.randomUUID();
  localStorage.setItem("csrf_token", token);
  return token;
}

export function attachCsrf(headers: Headers) {
  const token = localStorage.getItem("csrf_token") ?? issueCsrfToken();
  headers.set("X-CSRF-Token", token);
}
