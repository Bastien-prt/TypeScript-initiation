"use strict";
// Video 05 -- Les enums et tuples  ----------------
// Enum
var Weekday;
(function (Weekday) {
    Weekday[Weekday["lundi"] = 0] = "lundi";
    Weekday[Weekday["mardi"] = 1] = "mardi";
    Weekday[Weekday["mercredi"] = 2] = "mercredi";
})(Weekday || (Weekday = {}));
console.log(Weekday[1]);
// Tuples
var identity = ["Alexis", 26];
console.log(identity);
