// falsy values: 0, -0, 0n, "", null undefined, NaN
// truthy value: except falsy values are truthy values

// console.log("Hashim" && "Malik");

// console.log(0 && "false");

// console.log(0 > 1 && "Yes");

// console.log(0 < 1 && "Yes");

// console.log("Hashim" || 0);

// console.log(0 || "Hashim");

// console.log(0 && "Hashim");


const user = {
    name: "",
    age: 0,
    role: null,
    isLoggedIn: false,
    settings: {
        theme: null,
        fontSize: 14,
        notifications: true,
    },
    friends: [
        { name: "Ali", online: true },
        { name: "Sara", online: false },
    ],
};
let newName = user.name || "Hashim";
console.log(newName);
let age = user.age || 23;
console.log(age);
let role = user.role = "Frontend Dev";
console.log(role);
let theme = user.theme && undefined;
console.log(theme);
