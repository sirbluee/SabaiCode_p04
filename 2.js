function filterUnique(numbers) {
    return numbers.filter((numbers, index, self) => self.indexOf(numbers) === index);
}
const numbers = [1, 2, 2, 3, 4, 4, 5];
console.log(filterUnique(numbers));

let arr = [1,2,3,4,5] 
console.log(arr.indexOf(1))

