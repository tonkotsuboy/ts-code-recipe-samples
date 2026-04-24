// 書籍では recipe_113_3.ts で定義した Fish/Bird と isFish を前提にしています。
// 単体で動かすため、同じ型と型ガードをこのファイルにも同梱します。
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
