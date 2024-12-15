'use strict';

//Write a JavaScript program to compute the sum and product of an array of integers.

let inputArray = [1,2,3,4,5,6,7,8,9];

function calcArarySum(array){
    let sum = 0;

    for(let i in array){
        sum += array[i];
    }
    return sum;
}

function calcArrayProduct(array){
    let product = 1;
    for(let i in array){
        product *= array[i];
    }
    return product;
}

let paragraph = document.createElement('p');
document.body.appendChild(paragraph);

paragraph.innerHTML = 'Array sum = ' + calcArarySum(inputArray) + '<br>Array product = ' + calcArrayProduct(inputArray);