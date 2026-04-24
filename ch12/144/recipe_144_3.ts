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
