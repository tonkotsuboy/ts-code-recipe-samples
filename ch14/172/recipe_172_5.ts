function getStatusMessage(code: number): string {
  switch (code) {
    case 200:
      return "Success";
    case 404:
      return "Not Found";
    default:
      return "Unknown";
  }
}
