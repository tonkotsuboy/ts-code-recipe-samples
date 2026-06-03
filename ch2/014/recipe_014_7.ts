// else ifを使った書き方
function getAgeCategory(age: number): string {
  if (age < 13) {
    return "子供";
  } else if (age >= 13 && age < 20) {
    return "10代";
  } else {
    return "大人";
  }
}

// ブラウザ上で編集できます
// https://www.typescriptlang.org/play/?ts=6.0.3#code/PTAEFMBsGd1BLAZoJIZD+8oYwZD6DID7NCyDITtMAoRAVwDsBjAF3gHszQBzcKgQWYGEBDK8R2gE4BPABRdmALlBkSAWwBG4AQEop0KgPhlGoAN6FQCRKDHNQAHlABGAMzK9Bw6AEsSAhgCJACtqBs+Q8BuRwBfCBg4JBNxOAA+AF5rG1AAMiTQKItQACYABnt9J2dXd1APK2zAY7kA4NDYBwKXKjdPQHJNQC65KsMgwiCgA
