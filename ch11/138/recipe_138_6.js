try {
  decodeURIComponent("%E0%"); // URIError: URI malformed
} catch (error) {
  console.error(error);
}
