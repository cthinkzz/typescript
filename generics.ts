type InputType = number[] | string[];
const firstElem = (arr: InputType) => {
  return arr[0];
};

firstElem(['1', '2']).toUpperCase(); //error

const firstElemGeneric = <T>(arr: T[]) => {
  return arr[0];
};

firstElem(['1', '2']).toUpperCase(); // error

firstElemGeneric(['1', '2']).toUpperCase(); //no error
firstElemGeneric([false, true]); //we can pass any type of data, no need to mention which type in advance

interface User {
  name: string;
  age: number;
}
const user1: User = { name: 'Chandu', age: 20 };
const user2: User = { name: 'Patil', age: 21 };
console.log(firstElemGeneric<User>([user1, user2])); // we can even pass object types for generics
