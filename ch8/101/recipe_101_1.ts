fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    return response.json();
  })
  .then((data: { userId: number }) => {
    console.log("最初のデータ:", data);
    // 最初のデータを使って次のリクエストを行う
    return fetch(
      `https://jsonplaceholder.typicode.com/users/${data.userId}`,
    );
  })
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    return response.json();
  })
  .then((userData) => {
    console.log("ユーザーデータ:", userData);
  })
  .catch((error) => {
    console.log("エラー:", error);
  });

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3#code/GYUwLgxgFgFARFMYAOBnAXAekwK1QewDtkAbAQwhCnxIBMQAnAOjAE9kBLCfep7gW0zJ8qMKkwBGOAEoAUAAJ5LKCEIwYDEKmGFUIafIC8APnkBvBYvkdg8mAEJN2onqb4A1gYtWrYKA3wAd3lCEGCAUQYAhhgAAwAJABVEgAV5Rmj0eQASMycdV1EyMABXVABfWOkAbktFcrr5TVKGQiatApAmPCIYGstyuUVlVXVaYrIss3kyxgBJWizCEv4AI0Z5QaNTbytuXRouknwAc3hAAHNAXCVAOwZAcYZAH4ZAfoZ0OAAaeXGwMn6fbHkru5PQBJDIB-eUAxgyAMwZAITW10AVwyAeoZABUMgE6GQATDEDADIRgDEGRrNEqteSgSCwRqKWKIFAYbA9YjkSjUOiMFjsLg8LoCTCzBjiXKfMhMLkLSqvRo-TZDJR+UYaDoufTbcyNGx2Ryy3RdDxeUnyPwBYKhCJRfAxBLJNIZY1ZXL5OVMIqlCpVWo+Bo+PEEm3q7oENRiwaWEZqGBcgAiEwMJkVPn2BBIR1O8EAZwz3QBtDPcHs83jM9Aww18-RK+MVoOoLQwIztGjHDkxjmc4IjAJcM9xe7zLBeqQA
