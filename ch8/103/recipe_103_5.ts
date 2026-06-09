type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const fetchPost = async (id: number): Promise<Post> => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
  );
  if (!response.ok) {
    throw new Error(`HTTP error: ${response.status}`);
  }
  const post = (await response.json()) as Post;
  return post;
};

fetchPost(1)
  .then((post) => {
    console.log("取得したポスト:", post);
    console.log("タイトル:", post.title); // 型に基づいて補完が効く
  })
  .catch((error) => {
    console.error("取得に失敗しました:", error);
  });

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/C4TwDgpgBACg9gZ2FAvFA3gKClArgiAJwEkATALigDtcBbAIyIG5soBLC6uxwlnYNsAA2ESkkJsqAcz5R6cUiDHAJ0lgF8WmAMZwqSKADMIwbQAt4BtAEMEIKtqgAKDpRoMiASkoxCcWmwEADyWwAB8qBFYOLr6yIQQCGB6BKhQ1gDu1oJGJuZOrDgABmbAwGAI5AD0VQBWCHpgQtbaEGZwQqREAHSgYGy6Xd26tFXJSAhVACToHOpFADSsnrJshs4AhAlJKRDdcADWnhiFUMBmfhnUEFcAooR+hE5FABIAKm8wUESPlDPbyX0eyQ1mA+HmK1Y6lYsQM42QaCcmWy8USgII3XqeicnmOtlgiGAsgSYMIVCg8I0WmMpgshKcAEZPKxemYIFQnE54ccUFFTrCOnshHApE4AESANeVAOn6gHUGQD6DIBdhkAnQyACYZyGKFhTCZCcDEUoLusLRWLAP0MgBKGFWAa4Z1Zr4b1BCIVlAalBANHqgGsGQBf6oBTBkAIgyAMwZADsRgBjtQAyDIBOpUA8gxQ5k4Yag-JOH5wQg8vm6qACkTdZNPSVS92ARk1AOqmMsAfgzym3fB4pnVQdQrIA
