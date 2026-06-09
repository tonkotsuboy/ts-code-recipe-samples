class User {
  constructor(
    public name: string,
    public age: number,
  ) {}

  greet(): string {
    return `こんにちは、${this.name}です。`;
  }
}

// Userクラスのインスタンス型を抽出
type UserInstance = InstanceType<typeof User>;
// UserInstance: User

// ブラウザ上で編集できます
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/MYGwhgzhAECqEFMBO0DeAoa1gHsB2EALkgK7CE5IAUmW0ADiQEYgCWw0eYAtggFzQiSVngDmAGlpZGLdtDCj+nEtybJJWAJRoAvulqikCBISqaBQkaLRToRwiSR5oAA0DKDIGSGQNYMgQwZA9gyAgAwAJKiEABasEAB0XLw6gOYMgJoMgEAMLgDctHp66AD0OXCISID1DICXDICdDIB2DIAlDIDPDGWA-Qx1gNHqgEkMgL1GgF+K6IQAnvQIBcgAkgSEYHjAAwC80CNE45MAKn0IADy9-TgAZoNIAHwZebtzYxNK8MhAA
