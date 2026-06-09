type Cap = Capitalize<"hello world">;
// "Hello world"（"world"のwは変換されない）

type Uncap = Uncapitalize<"Hello World">;
// "hello World"（"World"のWは変換されない）

// ブラウザ上で編集できます
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/C4TwDgpgBAwghmKBeWCCWw4Bs0C8IA8ARABYRZYD2UA7pQE5YAmRAfANwBQA9N1EQAlyVWg2ZFAEP9E6jFoDsGGoHsGQJCagbeNAqgyAYhkBWDIBEGQJD-nTqEhQAqgDsAxgmTnr6TDnzEhFagHUxLDjz6lhT29JIi9ZIjkPFQ0dAyA
