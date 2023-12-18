function kiratAsync() {
    let p = new Promise(function (resolve) {
        setTimeout(resolve, 2000)
    })
    return p;
}

const value = kiratAsync();
value.then(function () {
    console.log("hi there");
})

