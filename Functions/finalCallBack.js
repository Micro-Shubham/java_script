//square
function square(n) {
    return n * n;
}
function cube(n) {
    return n * n * n;
}
//now here a function is being called in a function which is known as callback function
function sumOfthings(a, b, fun) {
    const val1 = fun(a)
    const val2 = fun(b)
    return val1 + val2;
}
let ans = sumOfthings(2, 2, cube);
console.log(ans);