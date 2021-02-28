"use strict";
// Video 16 - Les classes 
// Structure qui permet de définir un objet; ressemble aux interfaces mais différent !
var UserProfile = /** @class */ (function () {
    function UserProfile(firstname, lastname, age) {
        // video 17
        this._password = "testpassword";
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }
    // Video 17 - Ajouter une fonction à notre classe
    UserProfile.prototype.displayInfo = function () {
        var keys = Object.keys(this);
        for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
            var value_1 = keys_1[_i];
            console.log(this[value_1]);
        }
    };
    Object.defineProperty(UserProfile.prototype, "password", {
        // Video 18 - Propriétés Private vs Public
        // on get le password
        get: function () {
            return this._password;
        },
        // on modifie le password
        set: function (newPw) {
            this._password = newPw;
        },
        enumerable: true,
        configurable: true
    });
    return UserProfile;
}());
var user = new UserProfile("Lydia", "Perrot", 35);
user.displayInfo();
console.log(user.password);
user.password = "modifpassword";
console.log(user.password);
console.log("---------------");
var userX = new UserProfile("Justine", "Bree", 25);
userX.displayInfo();
console.log(user);
//  Video 19 - Le mot clé "static" pour les classes
var People = /** @class */ (function () {
    function People() {
        this.firstname = "kati";
    }
    People.sayHello = function () {
        console.log("hello");
    };
    People.nickname = "kat";
    return People;
}());
var myClass = new People();
console.log(People.nickname);
// console.log(People.firstname) --> ne fonctionne pas car firstname n'est pas en static
People.sayHello();
