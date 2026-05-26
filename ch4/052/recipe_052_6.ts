function maskSensitiveInfo(input: string): string {
  return input.replace(/(\d{4})\d{8}(\d{4})/, "$1****$2");
}

console.log(maskSensitiveInfo("1234567890123456"));
// "1234****3456"
