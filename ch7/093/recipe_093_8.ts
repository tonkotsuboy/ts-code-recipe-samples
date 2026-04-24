// 補足: 書籍には載っていないが、型Callbackをファイル内で定義する必要があるため単体実行用に記載
type Callback = () => void;
const cb: Callback = () => "hello"; // エラーにならない
