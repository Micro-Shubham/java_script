function func(x, callback) {
    callback(x);
}
func(10, function (variable) {
    console.log(variable);
})