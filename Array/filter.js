// function filterexample(arr) {
//     let afterfilter = arr.filter(function (element) {
//         return element <= 2
//     })
//     console.log(afterfilter);
// }
// let array = [1, 2, 3, 4, 5, 6, 7];
// filterexample(array);
let array = [1, 2, 3, 4, 5, 6, 6];
let newarray = array.filter(element => {
    return element > 2;
})
console.log(newarray);