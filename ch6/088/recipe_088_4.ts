type User = {
  name: string;
  address: {
    city: string;
  };
};

function sayCity({ address: { city } }: User) {
  console.log(`住んでいる街は${city}です`);
}

// 書籍では関数定義のみだが、動作確認のため呼び出し例を追加している
sayCity({ name: "田中", address: { city: "東京" } }); // 住んでいる街は東京です
