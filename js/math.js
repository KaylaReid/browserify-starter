"use strict";

let adding = require("./add");
let multiply = require("./multiply");
let subtract = require("./subtract");


let Caluclator = {
   adding,
   subtract,
   multiply
};

module.exports = Caluclator;

