// // Task 1
const themeButton = document.querySelector("button");
const htmlBody = document.querySelector("body");
// console.log(themeButton);

// let theme = "light";
// themeButton.addEventListener("click", () => {
//     if (theme === "light") {
//         document.body.style.backgroundColor = "#000";
//         document.body.style.color = "#fff";
//         theme = "dark"
//     }
//     else {
//         document.body.style.backgroundColor = "#fff";
//         document.body.style.color = "#000";
//         theme = "light"
//     }
// });

// Task 2

// themeButton.addEventListener("click", () => {
//     if (htmlBody.className === "") {
//         htmlBody.classList.add("dark");
//     } else {
//         htmlBody.classList.remove("dark")
//     }
// })

// Task 3
themeButton.addEventListener("click", () => {
    htmlBody.classList.toggle("dark")
})