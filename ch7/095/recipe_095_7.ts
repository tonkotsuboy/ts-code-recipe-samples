type NullableFlag = `flag-${null | undefined}`;
const f1: NullableFlag = "flag-null";
const f2: NullableFlag = "flag-undefined";

// ブラウザ上で編集できます
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/C4TwDgpgBAcgrgGwQQwEYIgMRQcygXigAMAzXAWgBIBvAO0QSgB8o5aATCEgS1onYC+RANwAoAMYB7WgGdgUEgEYAXLAZoM2ZHkIAiMtvL0kusVNnySAJlXwkGrLgJR9FNpx592poA
