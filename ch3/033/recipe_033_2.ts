interface User {
  id: number;
  name: string;
}

interface Admin extends User {
  role: "admin";
  permissions: string[];
}

// エラー。idプロパティが不足している
const adminUser: Admin = {
  name: "太郎",
  role: "admin",
  permissions: ["read", "write", "delete"],
};

// ブラウザ上で編集できます
// https://www.typescriptlang.org/play/?ts=6.0.3#code/JYOwLgpgTgZghgYwgAgKoGdrIN4ChnLAAmAXMiAK4C2ARtANz7lxURnphSgDmjAvrlyhIsRCgCCRKqGQQAHpBBF0aTFBxMoAewA2bZACI4U0AcYEADtGnp0wLSHTtOPANoBdfoID035IAqGQEuGQB+GQCAGYkB1hkBbhkBFhkAxhkBihkAZBkBYOUBm2MB1BkAzBkARBkBohlwEBw5kY2kQDGgySXLkAF4NAhAWfQNAKk1AOYSDABpNXVay017La2Bbe0cyVwMoCGMewwB3LkgFgyIIPVX3Xr56IA
