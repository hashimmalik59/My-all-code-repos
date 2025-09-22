// // Accessing elements
// const userInput = document.querySelector("input");
// const clearAll = document.querySelector(".clear-all");
// const add = document.querySelector(".addition");
// const sub = document.querySelector(".subtract");
// const divide = document.querySelector(".divide");
// const multiply = document.querySelector(".multiply");
// const equal = document.querySelector(".equal");
// const countNumbers = document.querySelector(".numbers");

// // Clear all input values
// clearAll.addEventListener("click", () => {
//     console.log("Clear-all button is clicked!");
//     userInput.value = "";
// })

// countNumbers.addEventListener("click", () => {
//     console.log(countNumbers.textContent);
// })



const num1 = +prompt("Enter 1st operand1");
const operator = prompt("Enter your operator")
const num2 = +prompt("Enter 2nd operand2");

if (operator === "+") alert(num1 + num2);
else if (operator === "-") alert(num1 - num2);
else if (operator === "*") alert(num1 * num2);
else if (operator === "/") alert(num1 / num2);