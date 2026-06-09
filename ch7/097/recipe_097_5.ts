function calculateTotal(numbers: readonly number[]): number {
  // numbers.push(10); // エラー
  return numbers.reduce((sum, num) => sum + num, 0);
}

// ブラウザ上で編集できます
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/GYVwdgxgLglg9mABBAhgGwiNKoFMAqcU6AFGCALYBGuATgM4BcituKAJgmgJ6LnV0A2gF0AlM341aiAN4AoRIgD0SvpSn0AdAAcQ9ABYkAjAAZRAbmWrAFQyBLhkA-DApa4oIWkkl0trdiAi4SEnpKABo1ClFEAF4APkRgikQAanCws3M5AF8gA
