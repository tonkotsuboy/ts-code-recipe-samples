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

// ブラウザ上で編集できます
// https://www.typescriptlang.org/play/?ts=6.0.3#code/C4TwDgpgBAEsxgLIWACwPYBMoF4oCIBxAUQBV8oAfAgBQHkBlcq2gVWevwBFiAZM4vgDcAKBEBjdADsAzsCgBBGgEkA+sQByXeso2kGuKAG8RUKAFcZEAE4yAXMdNmoAWxQZMDomXwAaJ2ZgAIZoXgD0QWAAlmGWNjJ+TgC+-mbi1hAhEKxW1g4mzq7uWF70TImFwaEEEdGxuQmpUCkiSVBBMlCSsvIyIVEyAGZREJ0AShCS1pgAPHLWUVIA5r7GRWglsPBIxZhCUFWoDvOLS80AfEJAA
