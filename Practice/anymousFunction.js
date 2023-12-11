function personName(name, anymous) {
    anymous(name + " hello");
}
personName("kyle", function (anymous) {
    console.log(anymous);
}
)