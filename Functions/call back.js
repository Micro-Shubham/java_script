//square function
function square(n) {
    return n * n;

}
//calling another function inside function called as callback function 
function sumofSquare(a, b) {
    const val1 = square(a);
    const val2 = square(b);
    return val1 + val2;
}
console.log(sumofSquare(1, 2));