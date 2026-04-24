type Cap = Capitalize<"hello world">;
// "Hello world"（"world"のwは変換されない）
type Uncap = Uncapitalize<"Hello World">;
// "hello World"（"World"のWは変換されない）
