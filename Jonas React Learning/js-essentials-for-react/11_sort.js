let arr = [10, 5, 9, 20, 3];
console.log(arr);

console.log(arr.sort());
console.log(arr.sort((a, b) => a - b));
console.log(arr.sort((a, b) => b - a));

console.log(arr); // mutates the original array

let fruits = ["Mango", "Apple", "Guava", "Banana"];
console.log(fruits);
console.log(fruits.sort());