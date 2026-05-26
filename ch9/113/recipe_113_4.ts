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
