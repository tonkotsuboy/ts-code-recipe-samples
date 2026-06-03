const arr = [1, 2, 3];
console.log(Object.getPrototypeOf(arr) === Array.prototype); // true
console.log(Object.getPrototypeOf(Array.prototype) === Object.prototype); // true

const date = new Date();
console.log(Object.getPrototypeOf(date) === Date.prototype); // true
console.log(Object.getPrototypeOf(Date.prototype) === Object.prototype); // true

const promise = Promise.resolve();
console.log(Object.getPrototypeOf(promise) === Promise.prototype); // true
console.log(Object.getPrototypeOf(Promise.prototype) === Object.prototype); // true

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3#code/MYewdgzgLgBAhgJwTAvDA2gRgDQwEy4DMAugNwBQokIANgKYB0NIA5gBQDyARgFZ3BQGLOlAAKCEFEkBPAA50OAMzaIEASlQo0AQSRxpDWRKlQ5dNaRgB6KzCgIArnUrgItRs3bc+AoSPGSMvJKbLoI+obGQeaaaN78gkaBpvIW1rb2TuQukLAAJnBQdKgwYHQA7jAAIoV0bBY5bvRMrJy8CX5iUSkKygVFGlpoNUWRyWZpNnaOzlRNHq3xvsJd48HKI4xJJhOxMEuJ3ROWU5nOjbBJALYAlhDFaAG39wwIdE0AbnUNc+4tXu1lv4jus2Nc7jEhjAnhCxjtUicMjNGn9PG0fIIVgF4b02DCXttooMtPtAYc1uZEdMnEA
