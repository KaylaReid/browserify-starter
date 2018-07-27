"use strict";

function add(a, b) {
   return a + b;
}

let score = 22;
let scoreb = 2;

let getScore = () => {
   return score;
};

function setScore(newValue){
   if (newValue < 0){
      console.log("NO NO NO");
   }else{
   score = newValue;
   }
}

module.exports = {add, getScore, setScore};

// module.exports = add;