function handleResponse(code: number): void {
  switch (code) {
    case 200:
      console.log("Success");
      break;
    case 500:
      console.log("Server Error"); // breakがないためエラー
    default:
      console.log("Unknown");
  }
}
