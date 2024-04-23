interface UserType {
  name: string;
  age: number;
  email: string;
  address: string;
}
//basically for key,value pairs
const users: Record<string, UserType> = {
  cp: {
    name: 'CP',
    age: 10,
    email: 'cp@gmail.com',
    address: 'cp.com',
  },
  pp: {
    name: 'PP',
    age: 15,
    email: 'pp@gmail.com',
    address: 'pp.com',
  },
};

// same as doing Map() in js
const map = new Map<string, UserType>();
