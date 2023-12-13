function array(arr) {
    console.log("original array ", arr);
    let newarray = arr.map(function (element) {
        return element * 2;
    })
    console.log("after map ", newarray);
}
let arrr = [1, 2, 4, 5, 6, 7];
array(arrr);
