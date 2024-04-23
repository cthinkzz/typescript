type UserType = {
  name: string;
  age: number;
  email: string;
  address: string;
};

type UpdateProps = Pick<UserType, 'age' | 'name' | 'email'>;

interface UserInterface {
  name: string;
  age: number;
  email: string;
  address: string;
}

type UpdateProps2 = Pick<UserInterface, 'age' | 'name' | 'email'>;

function updateUser(user: UpdateProps) {}
