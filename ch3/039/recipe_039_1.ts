function myFunction<T>(arg: T): T {
  return arg;
}

myFunction<string>("鈴木"); // "鈴木"
myFunction<number>(200); // 200

// ブラウザ上で編集できます
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/GYVwdgxgLglg9mABAWwJ4DFzXmAPAFQD4AKAQwCcBzALkXwEpb9EBvAKEUXIFMoRykFSgG42AXzZs0mSLAS4AzlHIwwlEgCJALEmAKcw31hiAPRHE2vVIxY5eMCGQAjbuRIAmAAzuDx0x-dA
