async function* fetchUserData(userIds: number[]) {
  for (const id of userIds) {
    const userData = await fetch(`/api/users/${id}`).then((res) =>
      res.json(),
    );
    yield userData;
  }
}

async function processUsers() {
  for await (const user of fetchUserData([1, 2, 3])) {
    console.log(`処理中: ${user.name}`);
  }
}

// 書籍では関数定義のみ。fetch はブラウザやNode.js 18+の環境で利用可能
// 動作確認は実際のAPIが必要なためここでは関数定義のみ同梱
void processUsers;
