let names = ["Hashim", "Ahmad", "Malik"];
let newName = names.filter(elem => elem.length > 5);
// console.log(names);
// console.log(newName);

let data = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let newData = data.filter(elem => elem > 5).map(elem => elem * 2).filter(elem => elem > 15);

// console.log(data);
// console.log(newData);

const mixed = [0, null, "Hash", "", 5, undefined];
const truthyOnly = mixed.filter(Boolean);
// console.log(mixed);
// console.log(truthyOnly);

const nums = [1, 5, 8, 12, 15, 20];
const newNums = nums.filter(n => n % 2 === 0);
console.log(nums);
console.log(newNums);

const ages = [12, 17, 18, 20, 25, 30];
const adults = ages.filter(age => age >= 18);
console.log(ages);
console.log(adults);

const words = ["apple", "ball", "cat", "dog", "elephant"];
const letters = words.filter(w => w.length > 3);
console.log(words);
console.log(letters);

const num = [-5, 0, 3, 7, -2, 10];
const newNum = num.filter(n => n > 0);
console.log(num);
console.log(newNum);

const items = ["react", "html", "css", "nextjs", "node", "js"];
const newItems = items.filter(item => item.length > 4)
console.log(items);
console.log(newItems);

const users = [
    { name: "Hash", active: true },
    { name: "Ali", active: false },
    { name: "Usman", active: true },
    { name: "Saad", active: false }
];
const activeUser = users.filter(active => active.active)
console.log(users);
console.log(activeUser);
