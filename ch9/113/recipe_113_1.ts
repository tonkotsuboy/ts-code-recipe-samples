function isString(value: unknown): value is string {
  return typeof value === "string";
}

function processValue(value: unknown) {
  if (isString(value)) {
    // ここでvalueはstring型として扱われる
    console.log(value.toUpperCase());
  }
}

processValue("hello"); // "HELLO"が出力される
processValue(123); // 何も出力されない

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/GYVwdgxgLglg9mABDAzgZSgJxmA5gCgDcBDAGxAFMAuRcAazDgHcwBKGk8i5FRFLHLkQBvAFCJEmClBCYkUAJ4AHCnGCJOlRAF5diAET9sefQG5RAX1GjQkWAkRLMcCBRQoAamUpFv1WmAMzGwi4sjq+KgYxgSaFKysoRISAPQpiIDKDBmA5gxxgPYMRoKA0eqAFgyA6gyAZgyAjkaA8QyAMQyA0QxhEhAIKHCkFAB0pHCxfl1QcACqSiqYAMLEKBT4CeYSVlaiTi5unn74+gAWFKS9+qymiGkGABIAogAyVwDy+oAyDIBfioDZSoCqDI0rzq7uXlz4AEYAEwAZiOJ3SgFV5QBBDK8PoArBkAIgxAA
