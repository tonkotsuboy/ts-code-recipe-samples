const nameList = ["田中", "鈴木", "佐藤"] as const;
// 型: readonly ["田中", "鈴木", "佐藤"]
nameList[0] = "山田"; // エラー
nameList.push("山田"); // エラー

// ブラウザ上で編集できます
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/MYewdgzgLgBGCGBbApgGQJbRgXhgbQCJAGV0Fo5AgGhgMBYkwCnMKrAFeUBPQggXRnghlEigG4AUAHphMQNHqALhgAnZPAAm4ADYBPfMTKUa9bS3aCEKDNDwAGDrgKBHHSIF+MUTEAVDIEuGQD8MhpGkxQAdAAOAK4QABYAFDZ2AJQOTm7uQA
