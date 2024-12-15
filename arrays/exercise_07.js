'use strict';

// Write a JavaScript program to sort the items of an array.
// Sample array : var arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
// Sample Output : -4,-3,1,2,3,5,6,7,8

let array1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];

function sortArray(array){
    return array.sort(function(a,b){return a-b})
}

console.log(sortArray(array1));