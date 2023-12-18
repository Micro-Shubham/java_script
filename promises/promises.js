const fs = require("fs");
//my own asychronous function
function kiratReadfile() {
    return new Promise(function (resolve) {
        console.log("inside promise");
        fs.readFile("a.text", "utf-8", function (err, data) {
            console.log("before resolve");
            resolve(data)
        })
    })
}

//callback function
function onDone(data) {
    console.log(data);
}

kiratReadfile().then(onDone)