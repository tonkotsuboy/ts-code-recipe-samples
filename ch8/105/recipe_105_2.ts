type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

function isPost(data: unknown): data is Post {
  if (typeof data !== "object" || data === null) {
    return false;
  }

  const obj = data as Record<string, unknown>;

  return (
    typeof obj.userId === "number" &&
    typeof obj.id === "number" &&
    typeof obj.title === "string" &&
    typeof obj.body === "string"
  );
}

const fetchPost = async (id: number): Promise<Post> => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
  );
  if (!response.ok) {
    throw new Error(`HTTP error: ${response.status}`);
  }
  const data = await response.json();

  if (!isPost(data)) {
    throw new Error("Invalid data structure");
  }

  return data; // ここでdataはPost型として扱える
};

fetchPost(1)
  .then((post) => {
    console.log("取得したポスト:", post);
    console.log("タイトル:", post.title);
  })
  .catch((error) => {
    console.error("エラー:", error);
  });

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/C4TwDgpgBACg9gZ2FAvFA3gKClArgiAJwEkATALigDtcBbAIyIG5soBLC6uxwlnYNsAA2ESkkJsqAcz5R6cUiDHAJ0lgF8WmAGa4qAYwFwq7BPCQAKUgENg1ynoDWVOAHcqASko27p2ImQsHDZtKAtQSDhQn2soAEIUNAAiOHoAKwhDJKgAHxyoGNREriEhDwxWHEIIYFxCE21rIQJZdUxWfWMkKFS01ALbWOsEKAAlTLhCUgAecUkpABo8Kmc3KgA+LSqaupMLSqgIiCie9IA6fCIyIuSaBiJsgDJHg6OT3rOOG6gku54nl44fjgY6hD4CYTQRLJObSAGvEHvc7yRTfJKwqRJVgeDTtTpUbraGr6AAW5mQaGGIAMYQ4lD+RC8sEIcFobAI03J61Q3KCUHx3WqCDAXShUGsrmsgigROApP2QKgAAMScBgGAEOQAPRatIIYxgITWfQQElwISkIhnCJsTqWs6dWhakVIBBagAk6A46iVC2xshCYTiQpFBIgZzgjnKfP4JJZrmoEATAFFCCzCBYlQAJAAqOZgUCI6conpDorOSFs+B9ONYbRwAuQhUpkulZbDZz1xgstdYgYscXZ5Ksgw80decbciZTacmFiSxCoADcml9CuJcIY6hAkrWcG1WNVavUBnYmFAdVBAMoMV8A5gwxQD2DOTANHqgAsGQDqDIAzBkAjkaACQZANEMmCaO0sqksOACMHisNaJIQFQFgWC6wDlCgvIHAK5rhkIcBSPOgBryoA6frvoA+gyALsMgCdDIAEwzkEkSxIXuQIYSIZzYbhSSAP0MgAlDJRgDXDDRdEBNaggiAx6hQTgDq2PKFhFpMKFoYqTHhrJGZJIAFQyAJcMgA-DPxhazoQok4kAA
