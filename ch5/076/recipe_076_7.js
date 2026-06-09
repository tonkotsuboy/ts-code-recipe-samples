const original = { name: "MDN" };
original.itself = original; // 循環参照

// エラー
try {
  const clone = JSON.parse(JSON.stringify(original));
  console.log(clone);
} catch (error) {
  console.log(error instanceof Error ? `${error.name}: ${error.message}` : error);
  // TypeError: Converting circular structure to JSON ...
}

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99&filetype=js&checkJs=false#code/MYewdgzgLgBCBOBLA5osBDANjAvDA3jBgLYCmAXDAEQCyAIgHJUwC+A3AFAIppYB0iKBFKYAZrjhJUGTGxgB6eTEBV+oAaXQEPKgc0cOHRTEAVDIEuGQD8MHKPACeBDjBihIsYJnCkJAKQDKAeQZ8ADujwwgAUnj580EhgqKIWwdzSWACUSZy29hAgmKR8zsjBTi6pHCx26FDAABYwwaTw8AhJ1ungmdm5IPl1DfAwaNDoYMCkIOIAovUIMAD8MAAGACT43Qh8JKQslEsr8HxkEBDoyBtzMJQ7xbZ6ACoWfqQTPZQAwuAAbnVQaMh2iPDAAFdMIEYJEAcAoAD4K4oCAYGEGDA+MiSkA
