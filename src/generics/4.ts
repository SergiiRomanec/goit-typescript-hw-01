type User1 = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

function createOrUpdateUser(initialValues: Partial<User1>): User1 {
  // Оновлення користувача

  const defaultValue: User1 = {
    name: 'John',
    surname: 'Deer',
    email: '',
    password: '',
  };

  return { ...defaultValue, ...initialValues };
}

createOrUpdateUser({
  email: 'user@mail.com',
  password: 'password123',
});