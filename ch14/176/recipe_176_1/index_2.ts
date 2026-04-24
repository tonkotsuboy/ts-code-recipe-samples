class Employee {
  showDetails() {
    console.log("Employee details");
  }
}

class Developer extends Employee {
  override showDetails() {
    console.log("Developer details");
  }
}
