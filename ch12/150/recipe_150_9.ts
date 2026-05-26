class BankAccount {
  #balance = 1000;
}

const account = new BankAccount();
account.#balance;
// エラー: Property '#balance' is not accessible outside class
// 'BankAccount' because it has a private identifier.
