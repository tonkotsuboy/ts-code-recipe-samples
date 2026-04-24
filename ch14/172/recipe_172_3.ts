function handleResponse(code: number): void {
  switch (code) {
    case 200:
      console.log("Success");
      break;
    case 500:
      console.log("Server Error");
      break;
    default:
      console.log("Unknown");
  }
}
