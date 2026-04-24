class BankAccount {
  private balance: number;

  constructor(balance: number) {
    this.balance = balance;
  }

  deposit(amount: number): void {
    this.balance += amount;
    console.log(`入金: ${amount}円, 新しい残高: ${this.balance}円`);
  }

  withdraw(amount: number): void {
    if (amount > this.balance) {
      console.log("残高不足");
    } else {
      this.balance -= amount;
      console.log(`出金: ${amount}円, 新しい残高: ${this.balance}円`);
    }
  }

  checkBalance(): void {
    console.log(`現在の残高: ${this.balance}円`);
  }
}

const account = new BankAccount(1000);
account.checkBalance(); // 出力: 現在の残高: 1000円
account.deposit(500); // 出力: 入金: 500円, 新しい残高: 1500円
account.withdraw(200); // 出力: 出金: 200円, 新しい残高: 1300円
account.withdraw(1500); // 出力: 残高不足
