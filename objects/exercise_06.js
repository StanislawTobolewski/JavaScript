'use strict';

// Write a bubble sort algorithm in JavaScript.
// Note : Bubble sort is a simple sorting algorithm that works by repeatedly stepping through the list to be sorted,
// Sample Data: [6,4,0, 3,-2,1]
// Expected Output : [-2, 0, 1, 3, 4, 6]

let inputData = [6,4,0, 3,-2,1];
let isSorted = false;
let counts = 0;

while(!isSorted){
    isSorted = true;
    for(let i=0;i<inputData.length-1;i++){
        if(inputData[i]>inputData[i+1]){
            let tmp = inputData[i+1];
            inputData[i+1] = inputData[i];
            inputData[i] = tmp;
            isSorted = false;
            counts++;
        } 
    }
}
console.log(`Data sorted in ${counts} moves.`)
console.log(inputData);
