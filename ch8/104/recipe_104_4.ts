type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

function fetchPostWithoutAsync(id: number): Promise<Post> {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then(
    (response) => {
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
      return response.json();
    },
  );
}

function displayPostWithoutAsync() {
  fetchPostWithoutAsync(1)
    .then((post) => {
      console.log("取得したポスト:", post);
    })
    .catch((error) => {
      console.error("エラーが発生しました:", error);
    });
}

displayPostWithoutAsync();

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3#code/C4TwDgpgBACg9gZ2FAvFA3gKClArgiAJwEkATALigDtcBbAIyIG5soBLC6uxwlnYNsAA2ESkkJsqAcz5R6cUiDHAJ0lgF8WmAGa4qAYwFwqUbRGD6AFvCQB1QZbi5gAQQQgDACg6UaDIgCUlDCEcLRsBAA8NsAAfBishOa4hCZmFpaeAAaWwMBgCOQA9EUAVgjGYEIAhvoQjkKkRAB0oGBs+goQzZ20RWCIwAhFACToHOpZAa2WEFSerDieSQgDVAQBqPFYOLvs2lCeAIQrawTNcADWmzt7u8CWoQDu1BAvAKKEoYTZABIAKv8YFAiN9KGNTsZzkhqsB8JMArI9upFrsknDUlBIetuuVjJ5Eaj1AAaViElE6PSGNjGKCkCJVaogGL2B5OVzuLw3VjpKwshzstwefSeACMAVRMzmnk8AyQmxQ21ROE66zgImaQjgUk8ACJAGvKgHT9QDqDIB9BkAuwyAToZABMM5F1xKgcuAhOREr2PVhVhloLghAVSruUFVFQ1Pp+usAFQyAS4ZAD8MgBkGQBeboB8V2NgD8GM12h1hl27dTkzCYemrGrMwasxzOIVcphAA
