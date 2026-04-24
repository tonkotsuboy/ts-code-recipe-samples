const counter = {
  count: 0,
  increment() {
    this.count++;
  },
};
counter.increment();
console.log(counter.count); // 出力：1
counter.increment();
console.log(counter.count); // 出力：2
