function logCount(count: number | null | undefined): void {
  console.log(count ?? -1);
}

logCount(null); // -1
logCount(undefined); // -1
