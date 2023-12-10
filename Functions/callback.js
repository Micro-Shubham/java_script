//sqaure
function square(n) {
    return n * n;
}
//cube 
function cube(n) {
    return n * n * n;
}
//function for adding 
function sumofSquare(a, b) {
    const val1 = square(a)
    const val2 = square(b)
    return val1 + val2;
}
//function of adding cube
function sumofCube(a, b) {
    const val1 = cube(a)
    const val2 = cube(b)
    return val1 + val2;
}
console.log(sumofCube(2, 2));
// this is dry(don't repeat yourself) so here callback function come into picture.lets see next file

