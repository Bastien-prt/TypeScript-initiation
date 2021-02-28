"use strict";
// Video 15 -- Arrays associatifs 
var days = [1, 2, 3, 4, 5];
days.push(6);
console.log(days);
var myObject = {
    title: "Laure",
    age: 32,
    color: "blue",
    sayHello: function (name) {
        console.log("Bonjour \u00E0 toi " + name);
    }
};
console.log(myObject.title);
myObject.sayHello("Laure");
