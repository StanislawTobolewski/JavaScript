'use strict';

// Write a JavaScript function to check whether an `input` is an array or not.
// Test Data :
// console.log(is_array('w3resource'));
// console.log(is_array([1, 2, 4, 0]));
// false
// true

let array01 = 'w3resource';
let array02 = [1, 2, 4, 0];

function checkIfArray(array){
return Array.isArray(array)
}


console.log(checkIfArray(array01));
console.log(checkIfArray(array02));