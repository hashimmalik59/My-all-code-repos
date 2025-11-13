// const basicFrontend = document.querySelectorAll("li");
// console.log(basicFrontend);

// let nodeToArray = Array.from(basicFrontend)

// console.log(nodeToArray);
// console.log(typeof nodeToArray);
// console.log(typeof basicFrontend);

// nodeToArray.push("ReactJS");

// console.log(nodeToArray);
// console.log(basicFrontend);


let newLi = document.createElement("li");
newLi.textContent = "Inserting new Li with JS";
newLi.classList.add("new")
let ul = document.querySelector("ul");

// ul.append(newLi);
// ul.prepend(newLi);
// ul.appendChild(newLi);
// ul.before(newLi);
// ul.after(newLi);

// ul.remove();

// ul.firstChild.remove();

// let lang = document.querySelector("#language");

// let h1 = document.createElement("h1")
// h1.textContent = "New H1 in ul";

// ul.replaceChild(h1, lang)


// let newSpan = document.createElement("span");
// newSpan.innerHTML = "New span tag"
// let headingOne = document.querySelector("h1");
// console.log(headingOne);


// document.body.replaceChild(newSpan, headingOne)

let LI = document.querySelector("#language");
console.log(LI);

// ul.removeChild(LI);
// ul.remove();

console.log(LI.getAttribute("id"));

LI.setAttribute("title", "JavaScript");

console.log(LI.getAttribute("title"));

// Task 1

let contentBody = document.querySelector("body")

let para = document.createElement("p");
para.textContent = "New Paragraph with JavaScript";

para.style.backgroundColor = "#000";
para.style.color = "green";

// document.contentBody.append(para);

// Task 2

let button = document.createElement("button");
button.innerHTML = "Click Me";
// document.contentBody.append(button)

// Task 3

let newDiv = document.createElement("div");
newDiv.setAttribute("class", "new-div");
newDiv.textContent = "New div ban gaya hai aur style bhi lag gaya hai!"
newDiv.style.backgroundColor = "pink";
newDiv.style.color = "black"
console.log(newDiv);
document.body.append(newDiv)

let anotherDiv = document.createElement("div");
anotherDiv.textContent = "Aik aur div bana gaya hai";
console.log(anotherDiv);
newDiv.appendChild(anotherDiv);
anotherDiv.setAttribute("class", "box2");


anotherDiv.classList.add("newBox");
console.log(anotherDiv.getAttribute("class"));
// anotherDiv.classList.remove("newBox");
// anotherDiv.classList.toggle("newBox")
console.log(anotherDiv.classList.contains("newBox"))