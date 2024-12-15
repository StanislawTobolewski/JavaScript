'use strict';

//Write a JavaScript program to find the sum of squares of a numerical vector.

let inputArray = [0, 1, 2, 3, 4, 5];

function calcSquaresSum(array){
let sum = 0;
for(let i in array){
    sum += Math.pow(array[i],2);
}
return sum;
}

let paragraph = document.createElement('p');
document.body.appendChild(paragraph);
paragraph.style.fontSize = '2em';

paragraph.textContent = calcSquaresSum(inputArray);