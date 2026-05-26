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
