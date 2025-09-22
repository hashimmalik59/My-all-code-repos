// setTimeout + Closures interview questions

function x() {
    for (var i = 0; i < 5; i++) { // var leak kar k bahar jata hai tabhi 5 print hua let k case meim 01234
        setTimeout(function () {
            console.log(i);
        }, i * 1000)
    }
}
x();