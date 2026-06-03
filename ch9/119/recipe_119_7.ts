type Last<T> = T extends [...any[], infer L] ? L : never;

type A = Last<[string, number, boolean]>; // boolean
type B = Last<[1, 2, 3]>; // 3

// ブラウザ上で編集できます
// https://www.typescriptlang.org/play/?ts=6.0.3#code/C4TwDgpgBAMghgZ2AHgCoD4oF4qqhAD2AgDsATBKAbQDo64SQqBdAGigEsSAzCAJ1jMoAflhQAXFBIQAbvwDcAKEWhIUAILZYiFFSR8uAc3YkArgFsARv3aWA9nYA2EBs3TyoAek9R7TlyQq4NAAQlrwSMhUAIzsAEzsAMxuHt5QiUA
