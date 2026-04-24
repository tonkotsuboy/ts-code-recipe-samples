// 型エラーのデモ: import type で読み込んだ名前を値として参照すると
// TS2693 "'User' only refers to a type, but is being used as a value here." を期待します。
import type { User } from "./types";
const message = User;
// 'User' only refers to a type, but is being used as a value here.
