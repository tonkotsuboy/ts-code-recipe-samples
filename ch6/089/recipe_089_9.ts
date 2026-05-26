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

void processUsers;
