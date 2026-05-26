export function issueCsrfToken(): string {
  const token = crypto.randomUUID();
  localStorage.setItem("csrf_token", token);
  return token;
}

export function attachCsrf(headers: Headers) {
  const token = localStorage.getItem("csrf_token") ?? issueCsrfToken();
  headers.set("X-CSRF-Token", token);
}
