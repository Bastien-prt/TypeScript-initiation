"use strict";
var value = 30;
if (typeof value == "number")
    console.log(" value est un nombre");
function foo(x) {
    if (typeof x === "string") {
        return true;
    }
    else if (typeof x === "number") {
        return false;
    }
    return fail("x n'est ni une string ni un number");
}
function fail(message) {
    throw new Error(message);
}
console.log(foo("k,kn"));
