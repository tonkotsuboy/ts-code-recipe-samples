class Employee {
  showDetails() {
    console.log("Employee details");
  }
}

class Developer extends Employee {
  showDetails() {
    // エラー: override修飾子がないため
    console.log("Developer details");
  }
}
