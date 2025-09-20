// Block scope shadowing

// block => "{}" curly braces ko block kehte hain

{
    const a = 10;
    console.log(a);
}

// Jab bhi humein multiple statements likhni ho to hum block "{}" curly brace ka use karte hain,

if (true) console.log(true);

if (true) {
    console.log(true);
    console.log(false);
}

// Note: let & const block scope hain agar hum block {} k andar let & const ko likhen aur bahir access karen to RefereneError

{
    let a = 10;
    const b = 20;
}
// console.log(a); // ReferenceError: a is not defined
// console.log(b); // ReferenceError: b is not defined

// Scope => Scope wo area of the code” hai jahan tak koi variable/function accessible hai.

// Shadowing => Shadowing tab hota hai jab ek inner scope me declare kiya gaya variable outer scope wale variable ke naam ko “dhak” deta hai.

var a = "I am var - global";
let b = "I am let - global";
const c = "I am const - global";

{
    // Block start
    var a = "I am var - block";   // ✅ shadows global, but actually overwrites (var is function/global scoped)
    let b = "I am let - block";   // ✅ shadows global b (block scope)
    const c = "I am const - block"; // ✅ shadows global c (block scope)

    // console.log("Inside block:");
    // console.log(a); // "I am var - block"
    // console.log(b); // "I am let - block"
    // console.log(c); // "I am const - block"
}

console.log("Outside block:");
// console.log(a); // ⚠️ "I am var - block" (var ignored block, changed global)
// console.log(b); // "I am let - global" (block b was separate)
// console.log(c); // "I am const - global" (block c was separate)


// Note: Shadowing ka concept let & const mein aata hai

// Illegal Shadowing => Illegal shadowing tab hoti hai jab tum ek block-scoped variable (let ya const) ko ussi scope ke andar ek var ke saath redeclare/shadow karne ki koshish karte ho.

let x = 10;

{
    var x = 20; // var bhi global mein chala jata hai kyun k=yeh function scope hai
    console.log(x);
}
