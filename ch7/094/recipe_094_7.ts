function getPerson(): [string, number] {
  return ["鈴木", 30];
}

const [userName, userAge] = getPerson();

// ブラウザ上で編集できます
// https://www.typescriptlang.org/play/?ts=6.0.3#code/GYVwdgxgLglg9mABAcwKZQAqoE4GcEAUAlAFyIDauU2MYyANImCALYBGOAuogN4BQiRNnQhsScgCJALEmAKcwmMAzAAZOAbj4BfPnwgIqFELhwA5AIYtUjQzgCCabgF4U6LHkJFVQA
