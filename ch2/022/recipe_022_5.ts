function logCount(count: number | null | undefined): void {
  console.log(count ?? -1);
}

logCount(0); // 0
