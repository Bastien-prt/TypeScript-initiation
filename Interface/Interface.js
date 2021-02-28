"use strict";
var user1 = {
    firstname: "bastien",
    lastname: "perrot",
    age: 23
};
function hello(pers) {
    console.log("Bonjour " + pers.firstname);
}
hello(user1);
