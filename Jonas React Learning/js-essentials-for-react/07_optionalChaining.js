const myData = {
    name: "Hashim",
    age: 23,
    isStudent: true,
    role: "Frontend Dev",
    technologies: {
        languages: ["HTML", "CSS", "JavaScript", "TypeScript"],
        frameworks: null,
        backend: ["NodeJS", "ExressJS"],
        database: ["MongoDB"],
        library: ["GSAP", "TailwindCSS", "ReactJS"],
    },
    address: {
        country: "Pakistan",
        city: "Peshawar",
        location: {
            area: "Tehsil Gor Khatri",
            street: "Mohallah Baru",
            houseNo: "#212121"
        }
    }
};

console.log(myData.technologies.frameworks.js); // 07_optionalChaining.js:25 Uncaught TypeError: Cannot read properties of null (reading 'js')
// console.log(myData.technologies.frameworks?.js);