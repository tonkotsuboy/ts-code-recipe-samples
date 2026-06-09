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
}

const person = new Person("田中", "太郎");
console.log(person.fullName); // 出力: 田中 太郎

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/MYGwhgzhAEAKCmAnCB7AdtA3gKGtADogJYBuYALvNAGZHLkByYAtvAFzQTnFoDmA3LgLEylaOC5NWHLjwHYhwdLICuwcikQAKWvSntO3InwA04yIxYHZx3gEosQvOQAWRCADpdkq9AC8NHQ+rIJ4zm6eEpas-ubB8KHQAL4KeLzw5DQqICD6WnYyRnyOYdCIGSqIGAAGACSYru5eQdHwSdD1jZEW+knViSkp2EpoXARIqBgBaPAA7nAT6FoARIAMroC0cstmy4BUmoBzCct2giOoIPAeICi8WviLaF7ZuVZH0AD0r9CAX4qA2UocG9D7IA
