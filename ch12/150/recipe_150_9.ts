// 意図的な型エラーデモです。クラス外部からプライベートフィールドへのアクセスは
// コンパイルエラー（TS18013）になります。
class BankAccount {
  #balance = 1000;
}

const account = new BankAccount();
account.#balance;
// エラー: Property '#balance' is not accessible outside class
// 'BankAccount' because it has a private identifier.
