function findMax(numbers) {
    return numbers.reduce((max, current) => (current > max ? current : max), 0);
}
const numbers = [10, 2, 3, 4, 5];
console.log(findMax(numbers));
