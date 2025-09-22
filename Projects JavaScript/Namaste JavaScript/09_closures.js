// Closures


// Jab JS function banta hai, woh sirf apna code hi nahi rakhta.
// Saath hi woh apna Lexical Environment(outer scope ka reference) bhi save karta hai.

// Isi saved reference ko hum Closure bolte hain.

// Isliye function ko uske parent function ke variables hamesha yaad rehte hain.

function a() {
    var b = 10;
    return function c() {
        console.log(b);
    }
};
let x = a();
x()

function outer() {
    let count = 0;
    function inner() {
        count++;
        console.log(count);
    }
    return inner;
}

const fn = outer();
fn();
fn();
fn();

const fn2 = outer(); // yahan pe naya Execution Context bana
fn2()


function makeMultiplier(x) {
    return function (y) {
        return x * y;
    }
}

const double = makeMultiplier(2);
console.log(double(5)); // 10

const triple = makeMultiplier(3);
console.log(triple(5)); // 15

// Multiplier wali example mein har x apna naya closure bana raha hai