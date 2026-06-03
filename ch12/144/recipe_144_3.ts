class Counter {
  private count: number;

  constructor(initialValue: number = 0) {
    this.count = initialValue;
  }

  increment(): void {
    this.count += 1;
    console.log(`カウンター値: ${this.count}`);
  }

  decrement(): void {
    this.count -= 1;
    console.log(`カウンター値: ${this.count}`);
  }

  reset(): void {
    this.count = 0;
    console.log("カウンターをリセットしました");
  }

  getValue(): number {
    return this.count;
  }
}

const counter = new Counter(5);
counter.increment(); // 出力: カウンター値: 6
counter.decrement(); // 出力: カウンター値: 5
counter.reset(); // 出力: カウンターをリセットしました

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3#code/MYGwhgzhAEDCD2BXAdgFwKYCdoG8BQ00ADpgJYBuYG0wSaAXNMogLYBGWA3HgTfMhFSZEwVPEwAKUslKpSYEADUFidI2bss0ALzQADAEpcvQqgAWpCADpaKVDujTZ8pSvTdCAXx6FpwTOgs6GgSBozk8KQAJsaEphbWtmjQANS6AIwecbQC8CDoViDwAOYSAAaA1QyAZQyAzwyA-QyAPwyAJAqMACQ45pY2dKieZQZZ3rxR6P6Bwaih4ZEx+HHQnYk90AC0GVmEORB5BUWllbWNLdDti912fQO8Q4QBEOiTYdAR0bFxZ0n2unobfLn5hRKEgARNV6g1AEkMgCuGQDdDIBhhkAEwyAdQZAH4MSMA+gzAq5eHzQYoPZQgVRTJisDjYOZxAKoRCYZALBLnNCDPBDLb2T5aXTIdAAdzgPSwEgArFdOZgrH4AkEQgNoAB6eXQQBfioBspUYYKOjAAbHhxVYRmMZY9OAqlWqNYdmoxhXrBRK7g9QqbFSr1dBNZDYYjURigA
