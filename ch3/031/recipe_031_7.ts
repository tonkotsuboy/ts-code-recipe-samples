// CSSStyleDeclaration から top と left プロパティだけを取り出す
type MyStyle = Pick<CSSStyleDeclaration, "top" | "left"> & {
  // display プロパティは固定値にしたい場合
  display: "block" | "inline-block" | "none";
};

const myStyle: MyStyle = {
  display: "block",
  top: "10px",
  left: "20px",
};

function applyStyleToElement(element: HTMLElement, style: MyStyle) {
  element.style.display = style.display;
  element.style.top = style.top;
  element.style.left = style.left;
}

// ブラウザ上で編集できます
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/PTAEGEGVoFwTwDYFMAiSDGCCGAnLMBLAewDtRBpBkEiGUGIgB1EAsGUZAMxlEHWGQW4ZBFhkDGGQMUMgAwZAigyAkhkBryoCiGQF+KgTQYAUPDpJQAWTiR4yUAF5QABQLoA1gB4osRKgzY8hUgBpQAIlp1XoAD5u2MVwA+UAAyUABvRVBQEFAAEwIAZzpsOC4+IUB7BkAvtUAs7UASBUBrBkB1BkB9BkARBkAWDUAIFSj4pJSsOAAuNwAjBCIzL19XAhIEfqQAWg6u0x63ElIkVwBuRQBfBcV0UkSOAFstHSRWzW0bfQi6hOTU1tcx7qc6j0uARgAGOgAPV1vo-0uAJhf327LRSKVgAVxI6EcZCwdBSOxsABUiABRZCbJAkGAACiQaIxMFaAAkEeoADKopDozEuDY2fbw5AAShO0VxlPxADpacgOWdGmkDNykLyGqkFqy8ZiubsOR5jkLZfRxaA2VSYNKbBz-PKZf4FosgA
