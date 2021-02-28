"use strict";
// Video 12 - propriété optionnelle ou immuable dans une interface
// Video 13 - héritage avec interface
var user2 = {
    firstname: "Alexandre",
    nickname: "Alex",
    // age: 29,
    password: "idk",
    hobbies: ["surf", "read", "chess"],
    color: "blue",
    isMajeur: true,
};
// Objet vide avec des champs undefined
var user3 = {};
console.log(user2);
var sayHello = function (name, age) {
    console.log("hello " + name + ", tu as " + age + " ans");
};
sayHello("alexis", 22);
var bestFriend = function (name) {
    return name;
};
console.log("l'ami de alex est " + bestFriend("jeje"));
