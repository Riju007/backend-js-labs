console.log("Experiment 1: var vs let")

// if (true) {
//     var a = 10;
// }

// console.log("var a = ", a)

// if (true) {
//     let b = 20;
// }

// console.log("var b = ", b);

function test () {
    if(true) {
        var x = 100;
        let y = 200
    }

    console.log("x = ", x);
    console.log("y = ", y);
}
test();