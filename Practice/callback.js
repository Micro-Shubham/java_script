function printvariable(personName, fun) {
    fun(personName);
}
function final(output) {
    console.log("Hello " + output);
}
printvariable("kyle", final);