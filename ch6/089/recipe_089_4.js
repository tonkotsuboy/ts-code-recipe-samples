function* range(start, end) {
  for (let i = start; i <= end; i++) {
    yield i;
  }
}

for (const num of range(5, 8)) {
  console.log(num);
}
// 5, 6, 7, 8
