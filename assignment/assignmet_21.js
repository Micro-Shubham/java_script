function printvariable(variable) {
    console.log(variable)
}
function printname(name, callback) {
    callback("hello " + name)
}
printname("kayle", printvariable)
