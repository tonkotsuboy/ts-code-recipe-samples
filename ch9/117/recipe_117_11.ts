type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

const API_ENDPOINTS = {
  users: {
    method: "GET",
    path: "/api/users",
  },
  createUser: {
    method: "POST",
    path: "/api/users",
  },
} as const satisfies Record<string, { method: HttpMethod; path: string }>;
