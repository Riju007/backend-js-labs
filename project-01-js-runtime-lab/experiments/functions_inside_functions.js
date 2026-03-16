function outer() {
    function inner() {
        console.log("Inner called")
    }
}

outer()
inner()
