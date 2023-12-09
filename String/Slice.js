function getslice(str, start, end) {
    console.log("original string :", str);
    console.log("After slice:", str.slice(start, end));
}
getslice("Hello World", 0, 5);
//include start till end means start will be there but end index value will not 