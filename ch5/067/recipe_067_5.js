const forbiddenChars = ["!", "@", "#", "$", "%"];

const password1 = "securePassword123";
const result1
  = forbiddenChars.some((char) => password1.includes(char));
console.log(result1); // false

const password2 = "securePassword!";
const result2
  = forbiddenChars.some((char) => password2.includes(char));
console.log(result2); // true
