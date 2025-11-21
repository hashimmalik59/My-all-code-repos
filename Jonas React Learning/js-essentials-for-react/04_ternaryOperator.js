// 🔥 Level 1 — Easy(variables / strings)
// Q1:
// Variable age = 20
// 👉 Use ternary to print "Adult" if age >= 18, else "Minor"

let age = 15;
const result = age >= 18 ? "Adult" : "Minor";
console.log(result);

// Q2
// Variable num = 7
// 👉 Print "Even" ya "Odd" using ternary

let num = 16;
const isEven = num % 2 === 0 ? "Even" : "Odd";
console.log(isEven);

// Q3:
// Variable isLoggedIn = false
// 👉 Print "Welcome back!" if true, else "Please login"

let isLoggedIn = true;
const checkLogIn = isLoggedIn ? "Welcome back" : "Please login";
console.log(checkLogIn);

// ⚡ Level 2 — Medium (variable assignment)
// Q4:
// Variable score = 85
// 👉 Assign grade = "A" if score>=90, "B" if score>=80, else "C" (nested ternary)

let score = 98;
let grade = score >= 90 ? "A" : "B";
console.log(grade);

// Q5:
// Variable isDark = true
// 👉 Assign theme = "Dark Mode" if true, "Light Mode" if false

let isDark = false;
const theme = isDark ? "Dark Mode" : "Light Mode";
console.log(theme);

// Q6:
// Variable temperature = 30
// 👉 Assign "Hot" if >35, "Warm" if >25, else "Cool"

let temperature = 40;
const data = temperature > 35 ? "Warm" : "Cool";
console.log(data);

// 🚀 Level 3 — Array / Object check
// Q7:
// Given:
const user = { name: "Hash", age: 23 };
// Print "Adult" or "Minor" based on age
const answer = user.age >= 18 ? "Adult" : "Minor";
console.log(answer);

// Q8:
// Variable items = []
// Print "Cart is empty" if empty, else "You have X items"

let items = ["Shoes", "T-Shirt", "Jacket"];
const itemsRange = items.length > 0 ? `Cart has ${items.length} items` : "Cart is empty";
console.log(itemsRange);

// ⚛️ Level 4 — React style / inline UI
// Q9:
// Render button text based on isLoggedIn boolean:
// 👉 "Logout" if true, "Login" if false

// function App() {
//     const [theme, setTheme] = React.useState(false)
//     return (
//         <>
//             <div>
//                 {theme === false ? <h1>Please Login.</h1> : <h1>Welcome Back.</h1>}
//                 <button onClick={function themeHandler() { setTheme(!true) }}>{theme === true ? LogOut : LogIn}</button>
//             </div>
//         </>
//     )
// }
// export default App;

// Q10:
// Render a greeting message:
const firstName = "Ali";
// 👉 "Hello Hash!" if firstName exists, "Hello Guest!" if empty
const greetUser = firstName.length > 2 ? `Hello ${firstName}!` : `Hello Guest`;
console.log(greetUser);

// Q11:
// Variable count = 0
// Render "No items" if count===0, "1 item" if count===1, "X items" if count>1 (nested ternary)

let count = 10;
let countLength = count < 1 ? "No items" : `${count.length} items`;
console.log(countLength);

// Q12:
// Variable score = 72
// Render "Pass" if >= 35, else "Fail"

let marks = 30;
const isPass = score >= 35 ? "Pass" : "Fail";
console.log(isPass);