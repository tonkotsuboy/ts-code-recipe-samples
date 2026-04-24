const createUser = (name, age) => {
  return { name: name, age: age };
};

// 書籍では関数定義のみだが、動作確認のため呼び出し例を追加している
console.log(createUser("太郎", 20)); // { name: '太郎', age: 20 }
