function getLength(arg) {
    if (arg.hasOwnProperty("length")) {
        return arg["lenght"];
    }
    return 0;
}
console.log(getLength(22));
console.log(getLength("Hello world."));
