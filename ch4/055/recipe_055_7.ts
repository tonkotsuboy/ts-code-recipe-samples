let isEditMode = false;

function toggleEditMode() {
  isEditMode = !isEditMode;
  console.log(`編集モードは${isEditMode ? "有効" : "無効"}です。`);
}

toggleEditMode(); // 編集モードは有効です。
toggleEditMode(); // 編集モードは無効です。

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/DYUwLgBAlgzgogEymAsgewSCBeCAzAQ2BhAG4AocvAVwDsBjMKNWiMNAcw9EWXUwAUASggBvchGjwkqDFlwBCWL1mYKk+ixhpQAOmCcBAA0AXvoDG0wEcMgH4ZAkwyB7BgAko5TP5YA-BABEgSHNAnUpeEABc3oCEjgEAvoDmDICaDIBADEZCFBGU7Fw8rnLCpBAA9LkQ5tb2-rFx5GncICpu2XkFRbZ24WVAA
