function kiratAsyncfunction() {
    let p = new Promise(function (resolve) {
        resolve("hii there")
    })
    return p;
}

async function main() {

    let value = kiratAsyncfunction()
    console.log(value)
}
main();
