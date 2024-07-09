function filterAge(users) {
  return users.filter(user => user.age > 18);
}

const users = [
  { name: 'Dara', age: 17 },
  { name: 'Jojo', age: 20 },
  { name: 'Kerker', age: 18 },
  { name: 'David', age: 19 }
];

console.log(filterAge(users));
