// accessor に初期値を指定する例です。
class Counter {
  accessor value = 1;

  increment(): void {
    this.value += 1;
  }
}

const c = new Counter();
console.log(c.value); // 出力: 1
c.increment();
console.log(c.value); // 出力: 2
