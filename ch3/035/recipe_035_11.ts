function useState<T>(initialState: T): [T, (newState: T) => void] {
  let state = initialState;
  const setState = (newState: T) => {
    state = newState;
  };
  return [state, setState];
}

// number型のuseStateを作る
const [count, setCount] = useState<number>(0);

// string型のuseStateを作る
const [myName, setMyName] = useState<string>("鈴木");

// ブラウザ上で編集できます
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/GYVwdgxgLglg9mABCAzgUwMpQIZTQHgBUA+AChjBlmwBstc0AuRQgSmYG1CAaRUsNAHd6eZm0QBeYogBucGABMAuogDeAKESIaaKIhQ48kxBSoxaItAG5NiCAgP7dl4-yGWxrSdI1atBhmMBYUNrWwBfGy0AJ10QaKQOALxedChLJRtw9XUAelzEMBAAWwAjNGjAaPVAOwZUTFDAJIZAHXlAaIZ1ezBHDntwKFTdAGE4XpUJZHRLfCKyirIABlYbPIKDaIoAcxq6y2a2jq7igE8AOWxitH6oAFkTs7RR8fqGfFWNsgAiQBYkwApzd8WgA
