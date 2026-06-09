class User {
  constructor(
    public name: string,
    public age: number,
  ) {}

  greet(): string {
    return `こんにちは、${this.name}です。`;
  }
}

// Userクラスのコンストラクター型を抽出
type UserConstructor = typeof User;

// ブラウザ上で編集できます
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/MYGwhgzhAECqEFMBO0DeAoa1gHsB2EALkgK7CE5IAUmW0ADiQEYgCWw0eYAtggFzQiSVngDmAGlpZGLdtDCj+nEtybJJWAJRoAvulqikCBISqaBQkaLRToRwiSR5oAA0DKDIGSGQNYMgQwZA9gyAgAwAJKiEABasEAB0XLw6gOYMgJoMgEAMLgDctHp66AD0OXCISID1DICXDICdDIB2DIDNDIDPDGWAEwwlRYD9DIA-DIDR6oBJDIC9RoBfiuiEAJ70CAXIAML4QmQUKAC80EMjOABmY0hpQA
