let isEditMode = false;

function toggleEditMode() {
  isEditMode = !isEditMode;
  console.log(`編集モードは${isEditMode ? "有効" : "無効"}です。`);
}

toggleEditMode(); // 編集モードは有効です。
toggleEditMode(); // 編集モードは無効です。
