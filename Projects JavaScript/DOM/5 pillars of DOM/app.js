// 2. selecting HTML element
document.querySelector("h1");

// 3. How to change text of HTML element
document.querySelector("h1").innerHTML = "h1 ka text hange hogaya hai";

// 4. How to style an HTML element
document.querySelector("h1").style.color = "red";

// 5. How to use event listener
document.querySelector("h1").addEventListener("click", function () {
    console.log("h1 pe click hogaya hai!");
    document.querySelector('h1').innerHTML = "Event se manipulation";
    document.querySelector('h1').style.backgroundColor = "green";
    document.querySelector('h1').style.fontSize = "50px";
    document.querySelector('h1').style.color = "white";
})