// Recipe 106_6: Node.js で ESM として実行するファイル（package.json の "type": "module" を併用）
// example.js
const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
const data = await response.json();
console.log(data);
