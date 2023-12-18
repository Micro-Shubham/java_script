function kiratAsyncfunction() {
    let p = new Promise(function (resolve) {
        setTimeout(function () {
            resolve("hii there")
        }, 2000)
    })
    return p;
}

async function main() {
    let value = await kiratAsyncfunction();
    console.log(value);
}
main();