// 1
let name = "Hashim Malik";
console.log(`Welcome ${name}`);

// 2
let a = 5;
let b = 10;
console.log(`Sum of a & b is ${a + b}`);

// 3
let role = `Hashim
Frontend Dev`;
console.log(role);

// 4
let library = "React";
console.log(`Hashim is learning ${library} right now!`);

// 5
const users = 45
const URL = `https://api.example.com.users/${users}`;
console.log(URL);


// 6
let emoji = "❤";
console.log(`Hashim ${emoji} React`);

// 7
const user = {
    name: "Hash",
    role: "Frontend Dev",
    skills: ["React", "Next.js", "Tailwind"]
};
console.log(`${user.name} is a ${user.role}`);

// 8
console.log(`${user.skills[0]}, ${user.skills[1]}, ${user.skills[2]}`);

// 9
console.log(`Name: ${user.name}
    Role: ${user.role}
    Skills: ${user.skills[0]}, ${user.skills[1]}, ${user.skills[2]}`);

// 10
const count = 5;
{/* <button>{You clicked {count} times}</button> */ }

// 11
let firstName = "Hash";
{/* <Welcome message={`Hello ${firstName}`} */ }

// 12
let method = "POST";
let endpoint = "/login";
console.log(`Sending ${method} request to ${endpoint}`);