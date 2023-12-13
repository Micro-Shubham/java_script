// let arr = [1, 2, 3, 4, 5, 6, 7];
// arr.forEach((element, index) => {
//     console.log(element + " " + index);
// });
function array(arr) {
    console.log("original array :", arr);
    arr.forEach(function (index, element) {
        console.log(index + " " + element)
    })
}
let arr = [1, 2, 3, 4, 5, 6];
array(arr);
