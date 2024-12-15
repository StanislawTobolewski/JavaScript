'use strict';

// Write a JavaScript program that accepts a number as input and inserts dashes (-) between each even number. For example if 
// you accept 025468 the output should be 0-254-6-8.

let x = 3025468;
let array = x.toString().split('');
let output = array[0];

for(let i=1;i<array.length;i++){
    if(array[i-1]%2===0 && array[i]%2===0)
    output= output + `-${array[i]}`;
else{
    output = output + array[i]
}
}

console.log(output);
