function getName(myName) {
    console.log(myName);
}
getName("Hashim");
const a = myName => console.log(myName);
a("Malik")

// 🔥 Level 1 — Easy(Basic Syntax)
// Q1:
// Write an arrow function add that takes 2 numbers and returns their sum.
const addTwoNums = (a, b) => a + b;
console.log(addTwoNums(2, 5));

// Q2:
// Write an arrow function square that takes 1 number and returns its square.
const square = num => num * num;
console.log(square(4));

// Q3:
// Write an arrow function greet that takes no parameter and returns "Hello!".
const greet = () => "Hello!";
console.log(greet());

// ⚡ Level 2 — Medium (Multiple params / string)
// Q4:
// Arrow function fullName takes firstName and lastName and returns "firstName lastName".

const fullName = (firstName, lastName) => {
    return `${firstName} ${lastName}`;
}
console.log(fullName("Hashim", "Malik"));

// Q5:
// Arrow function isEven takes a number and returns true if even, else false.
const isEven = num => {
    if (num % 2 === 0) {
        return "Even"
    } else {
        return "Odd"
    }
}
console.log(isEven(7));

// Q6:
// Arrow function maxNum takes 2 numbers and returns the bigger number.
const maxNum = (num1, num2) => {
    return Math.max(num1, num2);
}
console.log(maxNum(4, 12));

// 🚀 Level 3 — Array / Objects
// Q7:
// Array [1,2,3,4] ka square nikalne ke liye arrow function use karo with .map().
let arr = [1, 2, 3, 4];
let squareArr = arr.map(item => item * item)
console.log(squareArr);

// Q8:
// Array of users:
const users = [{ name: "Hash", age: 22 }, { name: "Ali", age: 17 }]
// Arrow function + .filter() se age >=18 wale users nikal do.
const adults = users.filter(item => item >= 18)
console.log(adults);

// Q9:
// Object {name:"Hash", role:"Dev"} me arrow function use karke string return karo:
// 👉 "Hash is a Dev"
const myData = {
    name: "Hash",
    role: "Dev",
    userData: () => {
        return `${myData.name} is a ${myData.role}`
    }
}
console.log(myData.userData());

// ⚛️ Level 4 — React Style
// Q10:
// Button click me arrow function use karke "Clicked!" console me print karo.
{/* <button onClick={() => console.log("Clicked!")}>Click Me</button> */ }

// Q11:
// React state update:
// const [count, setCount] = useState(0)
// Arrow function use karke count 1 increment karo.
// function App() {
//     const [count, setCount] = useState(0);
//     const countHandler = () => {
//         setCount(count + 1);
//     }
//     return (
//         <>
//             <h1>Count: {count}</h1>
//             <button onClick={countHandler}>Count</button>
//         </>
//     )
// }

// Q12:
// Array [10,20,30] ka sum nikalne ke liye arrow function + .reduce() use karo.

let nums = [10, 20, 30, 40];
let newNums = nums.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0)
console.log(newNums);