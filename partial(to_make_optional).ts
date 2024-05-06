type MyType = {
  name: string;
  age: number;
  address: string;
};

type PartialType = Partial<MyType>; // it makes all attribute types as partial
//can be used for patch api
