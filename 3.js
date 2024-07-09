function extractNames(users) {
    return users.map(user => user.name);
}
const users = [
    { name: 'Alice', age: 17 },
    { name: 'Bob', age: 20 },
    { name: 'Charlie', age: 18 },
    { name: 'David', age: 19 }
];

console.log(extractNames(users));
