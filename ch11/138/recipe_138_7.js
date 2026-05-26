try {
  eval("const x ="); // SyntaxError: Unexpected end of input
} catch (error) {
  console.error(error);
}
