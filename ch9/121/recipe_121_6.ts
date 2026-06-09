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

// ブラウザ上で編集できます
// https://www.typescriptlang.org/play/?ts=6.0.3&target=99#code/C4TwDgpgBAwg9gWzAQwHYigXigbwFBRSrIIQBcUAzsAE4CWqA5gNwFTIAmHNEllF+QoQDGcAK6paICtXpNWQqMLqgZtBizaEOEYMjoAbfri1CAXnTDwdauZsWFZEXbY0KhAX3de2EJAbgQZ2NBIVEJYApUMQQAIwgad0IENGRGBIFTQmJSV3ksqD99Azz7T29WHzwAemqoQEfbQBEGQDi0wBMdQDsGQHWGQFuGQEWGQDGGQGKGdsBo9UAkhkA15UB0-TxQSFhxSRoQABVwaGx4JDQQAG0AIk5uXkp9gF0D8KWQc+YoWqp1Jln1qAAtS2sINfnNxBR0Acjjw+OcDjo9IZThd9hYrHAdLcanVZBoXvMALKpdI0AByJG+rz+20B+z8YACQV4YP2KWIOJpOQgSIeqKYQA
