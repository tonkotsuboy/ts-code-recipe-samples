type Fish = {
  swim: () => void;
};

type Bird = {
  fly: () => void;
};

// ユーザー定義型ガード関数
function isFish(pet: unknown): pet is Fish {
  return typeof pet === "object" && pet !== null && "swim" in pet;
}
