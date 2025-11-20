const myData = {
    name: "Hashim",
    age: 23,
    isStudent: true,
    location: {
        country: "Pakistan",
        city: "Peshawar",
        address: "Tehsil gor khatri, Peshawar city",
        street: "Mohallah baru",
        houseNo: "house #01",
    }
}
const { name, age, location: { country, city } } = myData;
console.log(country)
console.log(city)
console.log(name)
console.log(age)

const fruits = ["Apple", "Banana", "Orange", "Mango", "Guava"];
console.log(fruits);

const [firstFuits, , thirdFruits] = fruits; // Note: yahan hum ne 2nd wale ko skip kiya hai
console.log(firstFuits);
console.log(thirdFruits);

const names = ["Hashim", "Ahmad", "Malik"];
console.log(names);

const [firstName, middleName, lastName] = names;
console.log(firstName)
console.log(middleName)
console.log(lastName)

const { location: { street, address } } = myData;
console.log(street, address);

const currecncies = ["PKR", "INR", "USD", "EURO", "YUAN"];

const [currencyPak, ...others] = currecncies;
console.log(currencyPak);
console.log(others);