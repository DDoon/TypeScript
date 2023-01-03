// Enum

const ADMIN = 0;
const READ_ONLY = 1;
const AUTHOR = 2;

enum Role { ADMIN, READ_ONLY, AUTHOR };

const person = {
  name: 'Maximilian',
  age: 30,
  hobbies: ['Sports', "Cooking"],
  role: Role.ADMIN
};

if (person.role === Role.AUTHOR) {
  console.log("is author")
}
