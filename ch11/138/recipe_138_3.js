const message = "こんにちは";
try {
  message(); // TypeError: message is not a function
} catch (error) {
  console.error(error);
}
