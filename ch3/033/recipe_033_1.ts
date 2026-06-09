interface User {
  id: number;
  name: string;
}

interface Admin extends User {
  role: "admin";
  permissions: string[];
}

const adminUser: Admin = {
  id: 1,
  name: "太郎",
  role: "admin",
  permissions: ["read", "write", "delete"],
};

// ブラウザ上で編集できます
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/JYOwLgpgTgZghgYwgAgKoGdrIN4ChnLAAmAXMiAK4C2ARtANz7lxURnphSgDmjAvrlyhIsRCgCCRKqGQQAHpBBF0aTFBxMoAewA2bZACI4U0AcYEADtGnp0wLSHTtOPANoBdfoIQOOyY9IgGNBkkoHIALwaBMRkAIwANEwgLPoGgFSagHMJBkkE2npkRiYgOUxWUDZ2vmSuBlAQxjmGAO5ckE0GRBB67e5JfPRAA
