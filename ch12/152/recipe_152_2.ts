class Person {
  private firstName: string;
  private lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  set fullName(name: string) {
    const [first, last] = name.split(" ");
    this.firstName = first;
    this.lastName = last;
  }
}

const person = new Person("田中", "太郎");
console.log(person.fullName); // 出力: 田中 太郎

person.fullName = "佐藤 花子";
console.log(person.fullName); // 出力: 佐藤 花子

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3#code/MYGwhgzhAEAKCmAnCB7AdtA3gKGtADogJYBuYALvNAGZHLkByYAtvAFzQTnFoDmA3LgLEylaOC5NWHLjwHYhwdLICuwcikQAKWvSntO3InwA04yIxYHZx3gEosQvOQAWRCADpdkq9AC8NHQ+rIJ4zm6eEpas-ubB8KHQAL4KeLzw5DQqICD6WnYyRnyOYdCIGSqIGAAGACSYru5eQdHwSdD1jZEW+knViSlCEBlZOXloVoVyDjilSmhc0ADa3uRmUQC6sROsHhD4IETkWgBE0Cd2ieFNq-qxq1fQXR5RdwFRA9iD84v4SKgYAJoeAAdzg-3Qp0ADK6AWjkTmYToAqTUAcwkXQQ-FAgeAvFC8LR-ZDoLzZXJWS7QAD0FOggC-FQDZShxYdAUQoCQDiWNfAEToAFeUAJ6HQQCNQYAFbRO6OUmOxIFx+IhaA5pNY5KptIZ0H5QuFQA
