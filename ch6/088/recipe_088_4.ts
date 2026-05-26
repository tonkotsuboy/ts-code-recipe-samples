type User = {
  name: string;
  address: {
    city: string;
  };
};

function sayCity({ address: { city } }: User) {
  console.log(`住んでいる街は${city}です`);
}

sayCity({ name: "田中", address: { city: "東京" } }); // 住んでいる街は東京です
