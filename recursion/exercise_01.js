'use strict';

// Write a JavaScript program to calculate the factorial of a number.  
// In mathematics, the factorial of a non-negative integer n, denoted by n!, 
// is the product of all positive integers less than or equal to n. For example, 
// 5! = 5 x 4 x 3 x 2 x 1 = 120


let n = 5;

function  calcFactorial(x){
    let factorial = 1;
    for(let i=1;i<=x;i++){
        factorial*=i;
    }
    return factorial;
}

let paragraph = document.createElement('p');
document.body.appendChild(paragraph);
paragraph.innerHTML = '<strong>' + calcFactorial(n) + '</strong>';
paragraph.style.fontFamily = 'impact';
paragraph.style.color = 'red';
paragraph.style.fontSize = '2em';