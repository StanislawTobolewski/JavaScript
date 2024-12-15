'use strict';

// Write a JavaScript function to get the last element of an array. Passing the parameter 'n' will return the last 'n' elements of the array.
// Test Data :
// console.log(last([7, 9, 0, -2]));
// console.log(last([7, 9, 0, -2],3));
// console.log(last([7, 9, 0, -2],6));
// Expected Output :
// -2
// [9, 0, -2]
// [7, 9, 0, -2]



function last(array, n){
    if(array == null){
        return 0;
    }
    if(n==null || n<0){
        return array[array.length-1];
    }
    if(n>array.length){
        return array;
    }
    else{
        return array.slice(Math.max(array.length-n, 0));
    }
}
console.log(last([7, 9, 0, -2]));
console.log(last([7, 9, 0, -2],2));
console.log(last([7, 9, 0, -2],6));
