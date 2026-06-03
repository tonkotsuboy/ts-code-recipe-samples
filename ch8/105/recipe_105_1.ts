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
  const data = await response.json();
  return data; // dataは実際にはany型、型の保証はない
};

// 関数参照未使用を避けるための呼び出し
fetchPost(1);

// ブラウザ上で編集できます
// https://www.typescriptlang.org/play/?ts=6.0.3#code/C4TwDgpgBACg9gZ2FAvFA3gKClArgiAJwEkATALigDtcBbAIyIG5soBLC6uxwlnYNsAA2ESkkJsqAcz5R6cUiDHAJ0lgF8WmAMZwqSKADMIwbQAt4BtAEMEIKtqgAKDpRoMiASkoxCcWmwEADyWwAB8qBFYOLr6yIQQCGB6BKhQ1gDu1oJGJuZOrDgABmbAwGAI5AD0VQBWCHpgQtbaEGZwQqREAHSgYGy6Xd26tFXJSAhVACToHOpFADSsnrJshs4AhAlJKRDdcADWnhiFUMBmfhnUEFcAooR+hE5FABIAKm8wUESPlDPbyX0eyQ1mA+HmK1Y6lYsQMpFB1jSmWy8USgII3XqeickJwCTBhCoUHhwGsTCgNWJCMA9gyAfO1ANlpgGsGanWKggQDR6oBABnZgDsGQC78oAeKOpgCsGQAiDJhNJhMJTAEWpgAdTQBDyoBzR0AVOaAf3lABSugCSGQD+CYBFBkA0QyAfQZAIEMPMAPiqAZwZAF+KgHUGTDGUwWRDAJwARhWQA
