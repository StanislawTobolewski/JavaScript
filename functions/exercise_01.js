"use strict";

// Write a JavaScript function that reverses a number.
// Example x = 32243;
// Expected Output : 34223

// let x = 32243;
let x = 123456789;

function reverse(input){
  input = input +"";
  input = input.split("").reverse().join("");
  return parseInt(input);
}

console.log(reverse(x));