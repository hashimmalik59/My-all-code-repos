// 🔥 Day 1 Problems (Solve Yourself)
// Ek users array banao jisme 4–5 users hon (har ek ka id, name, aur age).
// forEach use karke sab users ke name print karo.
// map use karke sirf users ke age ka ek naya array banao.
// filter use karke sirf un users ko return karo jinka age > 22 hai.
// Ek product object banao jisme id, title, aur price ho.
// Us object ko JSON string me convert karo.
// Phir JSON ko wapas object me parse karke uska title print karo.

// Step 1
const user = [
    { id: 1, name: "Hashim", age: 23 },
    { id: 2, name: "Sara", age: 20 },
    { id: 3, name: "Ali", age: 22 },
];

// Step 2
user.forEach(function (item) {
    console.log(item.name);
});

// Step 3
const ageArr = [];
user.map((item) => {
    ageArr.push(item.age);
    console.log(ageArr);
});

// Step 4
user.filter((item) => {
    if (item.age > 22) {
        console.log(item.name);
    }
});

// Step 5
const product = {
    id: 1,
    product: "t-shirt",
    price: 5999,
    title: 'Qaidi number "804"',
};

const objToStr = JSON.stringify(product);
console.log(objToStr);

// Step 6
const strToObj = JSON.parse(objToStr);
console.log(strToObj);