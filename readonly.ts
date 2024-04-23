interface UserReadOnly {
  readonly name: string;
  readonly age: number;
}
const userReadonly1: UserReadOnly = { name: 'CP', age: 20 };
userReadonly1.age = 20; //error can't change

interface UserReadOnly2 {
  name: string;
  age: number;
}
const userReadonly2: Readonly<UserReadOnly2> = { name: 'CP', age: 20 };
userReadonly2.age = 30; // error can't change
