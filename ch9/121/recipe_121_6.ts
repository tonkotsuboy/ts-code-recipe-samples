type Company = {
  name: string;
  address: {
    country: string;
    city: string;
    details: {
      zipCode: string;
      street: string;
    };
  };
  employees: {
    count: number;
    manager: {
      name: string;
      email: string;
    };
  };
};

// 深い階層のプロパティの型を取得
type CountryType = Company["address"]["country"]; // string
type ZipCodeType = Company["address"]["details"]["zipCode"];
// string
type ManagerNameType = Company["employees"]["manager"]["name"];
// string
