// JavaScript Document
`use strict`;

let userNumber = 901;

let hundreds = Math.floor(userNumber/100);
let decimal = Math.floor((userNumber-hundreds*100)/10);
let ones = userNumber%10;

if(userNumber<1000 && userNumber>0){
console.log(`${ones+decimal+hundreds}`);
}else{
	console.log("Wrong input data (1000 - 0)");
}