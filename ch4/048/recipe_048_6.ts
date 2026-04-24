type User = {
  name: string;
  age: number;
  email: string;
};
function generateUserCard(user: User): string {
  return `
    <div class="user-card">
      <h2>${user.name}</h2>
      <p>年齢: ${user.age}</p>
      <p>メール: ${user.email}</p>
    </div>
  `;
}
const user: User = {
  name: "太郎",
  age: 25,
  email: "taro@example.com",
};
console.log(generateUserCard(user));
