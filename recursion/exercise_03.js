'use strict';

// Write a JavaScript program to get integers in the range (x, y) using recursion.  
// Example : range(2, 9)
// Expected Output : [3, 4, 5, 6, 7, 8]

let x=2;
let y=9;

function displayInRangeIntegers(a, b){
    let inRangeIntegers = [];
    for(let i = (a+1) ; i < b ; i++){
        inRangeIntegers.push(i);
    }
    return inRangeIntegers;
}


console.log(displayInRangeIntegers(x, y));
