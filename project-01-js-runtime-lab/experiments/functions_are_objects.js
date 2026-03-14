function greet() {
    console.log("Hello");
}

console.log(typeof greet)
greet.language = "english"
console.log(greet.language)

function hello() {
    console.log("hello")
}

const x = hello
const y = function(){
    console.log("hello")
}

console.log(x===y)

