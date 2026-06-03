export function issueCsrfToken(): string {
  const token = crypto.randomUUID();
  localStorage.setItem("csrf_token", token);
  return token;
}

export function attachCsrf(headers: Headers) {
  const token = localStorage.getItem("csrf_token") ?? issueCsrfToken();
  headers.set("X-CSRF-Token", token);
}

// ブラウザ上で編集できます
// https://www.typescriptlang.org/play/?ts=6.0.3#code/KYDwDg9gTgLgBAMwK4DsDGMCWEV0wZ3yWAGF8oEAVCAa2BQAoBKALjnxikxQHM4BvAFBw4aHBzgxa9OAF5RUAJ5gpAOigBDFABMIAWwCqBgJIARZgG5hcADYQ0GmwGUpmnsFX5gMYzGB6GACI0cgQAfSk6FECAGklpFCYrEShvJChcSPorAF9BQVBIWERUDGxcDRgYDTQACzIKBlrgDW1gKHw2AAkWto6mAWsxFAks3Hk7B2dXDXdVdx8-AODQiITAgYB+TbxCYgaqBMtrZtb2-E9vIIANAFoSJwAlADFb6ijY+KikwRygA
