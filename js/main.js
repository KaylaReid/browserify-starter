"use strict";

console.log("main js is in the house");

let MathModule = require("./math");
console.log("MathModule", MathModule);

console.log("adding", MathModule.adding.add(3, 5));

console.log(MathModule.adding.getScore());

MathModule.adding.setScore(199);

console.log(MathModule.adding.getScore());