async function* fetchUserData(userIds: number[]) {
  for (const id of userIds) {
    const userData = await fetch(`/api/users/${id}`).then((res) =>
      res.json(),
    );
    yield userData;
  }
}

async function processUsers() {
  for await (const user of fetchUserData([1, 2, 3])) {
    console.log(`処理中: ${user.name}`);
  }
}

void processUsers;

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3#code/IYZwngdgxgBAZgV2gFwJYHsICp4FNlQAWAqiLgE4AiwywAFAmeQJIAmIAXDBAgLYBGFANoBdAJQwA3gCgY8dORh0omEMhipWMdHBiMKbEBJly5KiGr1NqtGAF4YwAO7BU6uPiJ0ABgHpgAA6ovvrkIL4AJJKaAL7eYgB0yIS4EHR05LhG9gB8sqZymSAJAFYgmHRiADT5cmIA3LUwYKi4ADZaoTbAjXIx0v3SoJCwiCgYEDAB5OhQWSCkFCCVUvlwCo4ubkrmlqHauh4EJNY09EIAjFUwAEzXAMzixk276G24CW3oAOY+gGeKgDAXQC0clwoqEEhBgLxcHEGvl+oMAG7oTRTGZzEALJggepAA
