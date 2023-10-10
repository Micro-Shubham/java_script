function fun(x, callback) {
    callback(x)
}
fun(10, function (variable) {
    console.log(variable)
})