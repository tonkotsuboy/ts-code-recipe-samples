// 書籍では共通の型構造を示すスニペットとして掲載しています。
// 単体で型チェックが通るよう、type宣言でラップしています。
type User = {
  id: number;
  name: string;
  age: number;
  address: {
    city: string;
  };
};
