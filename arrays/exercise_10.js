'use strict';

// Write a JavaScript program that prints the elements of the following array.
// Note : Use nested for loops.

let a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];

function printArray(arrary){
    for(let i=0;i<arrary.length;i++){
        console.log("row " + (i+1)) // starting from first row
        for(let j=0;j<arrary[i].length;j++){
            console.log(arrary[i][j]);
        }
    }
}

printArray(a);