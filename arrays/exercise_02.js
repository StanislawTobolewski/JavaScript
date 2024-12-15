'use strict';

// Write a JavaScript function to clone an array.
// Test Data :
// console.log(array_Clone([1, 2, 4, 0]));
// console.log(array_Clone([1, 2, [4, 0]]));
// [1, 2, 4, 0]
// [1, 2, [4, 0]]

let array01 = [1, 2, 4, 0];
let array02 = [1, 2, [4, 0]];

function cloneArray(inArray){
    let newArray = new Array();
    return newArray = inArray;
}

console.log(array01);

console.log(array02);