const myUser = {
  id: 1,
  name: "太郎",
  age: 20,
  address: {
    city: "東京",
  },
};

// ユーザー情報を更新する関数
const updateUser = (user: {
  id: number;
  name: string;
  age: number;
  address: {
    city: string;
  };
}): void => {};

// ブラウザ上で編集できます
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/MYewdgzgLgBAtgTwKoQKYCcYF4YG8BQMMAlgCYBcMAjADSExgCGcqlARIFSagcwlt1GMBzVjABMABj4xGpUulQQIlAkSLBiUBO0CO5oBq5XvQC+dAwG58+APQWYgM4ZAPwyA2hjuBRg0CMGoCSGQC9mgBtNAmgyBohkAi1MAHU3xQSFgAVwAHUkYoVBQMbBgACki0dCV6MkowSLgAIwwzIiYWSmh0YjABUqkhPILi9HrpWXlFPHpVdU0YKpq6wzMDAEpKADcQMmwAPjxTIA
