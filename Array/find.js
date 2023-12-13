let array = [1, 2, 3, 4, 5, 7];
// let n = array.find(number => {
//     return number > 2
// })
// console.log(n);

function newarray(arr) {
    let n = arr.find(function (element) {
        return element > 2;
    })
    console.log(n);
}

newarray(array);