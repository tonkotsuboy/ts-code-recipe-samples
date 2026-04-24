function logRandom(): void {
  if (Math.random() < 0.5) {
    console.log("Heads");
    return; // OK
  }
  console.log("Tails");
}
