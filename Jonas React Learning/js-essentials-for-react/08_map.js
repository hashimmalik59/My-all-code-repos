let arr = [1, 2, 3];
let newArr = arr.map(item => item * 2);
console.log(arr);
console.log(newArr);

newArr.push("Abc")
console.log(newArr);

let mithai = ["Gulab Jamun", "Rasgull", "Jalebi", "Barfi", "Laddu"];
let index = 0;
const newMithai = mithai.map(sweet => `${++index}: ${sweet}`)
console.log(mithai);
console.log(newMithai);

let myData = {
    name: "Hashim",
    age: 23,
    role: "Frontend Dev",
    skill: {
        languages: ["HTML", "CSS", "JavaScript"],
        frameworks: null,
        library: ["ReactJS", "TailwindCSS", "GSAP"],
    }
}
// let newData = myData.map(data => {
//     return `${data.skill.languages}`;
// })
console.log(myData);
// console.log(newData);

let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let tenTable = number.map(multi => multi * 10);
console.log(number);
console.log(tenTable);