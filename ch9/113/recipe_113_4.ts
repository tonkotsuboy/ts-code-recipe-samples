type Fish = {
  swim: () => void;
};

type Bird = {
  fly: () => void;
};

function isFish(pet: unknown): pet is Fish {
  return typeof pet === "object" && pet !== null && "swim" in pet;
}

function action(pet: Bird | Fish): void {
  if (isFish(pet)) {
    pet.swim();
  } else {
    pet.fly();
  }
}

action({ swim: () => console.log("swim") }); // "swim"
action({ fly: () => console.log("fly") }); // "fly"

// ブラウザ上で編集できます。実行するには左上の「Run」ボタンを押してください
// https://www.typescriptlang.org/play/?ts=6.0.3#code/C4TwDgpgBAYglgZwBZQLxQN4CgpQQdzgFsAuKACgEo0A+KANwHs4ATAbiwF8OtRIoAQnABOLNJhxQAZgBsQZKrQbN2XHlICuAOwDGwOIy1RE8ZOUjAy2gNZbG+LZTIXjCWIhTZcwiMA3CjPghGKSgXVAioACJGACMAKwg9KKgAMlSw3ygAQkitDRkZNIyogmIUuCMLDk4sLE1dfUMoAEM9Ay1zXzIhUSgAH3dkJ2VWCVw4UPITDy7gSmovXEzgADoyoioOXE4oCBkEaCXcC1XZEC3JWtqsNqbOjDxCUgpqVDodQwRGGQhVmUYAHNyKVnlFqJxKGwoAB6GHRDZRW7tQzkR7nBRvD5fH5-AHAqLncFQSHQuHRIlAA
