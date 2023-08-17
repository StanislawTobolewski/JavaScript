// JavaScript Document
`use strict`;

let inputNumber = 0;

inputNumber = parseInt(prompt("Enter a three-digit number:"));

let num100 = Math.trunc(inputNumber/100);
let num10 = inputNumber%10;


if(inputNumber>=100 && inputNumber<=999){
isPalindrome(num10, num100);
}else{
	alert("You must enter three-digit number.");
}

function isPalindrome(num1, num2){
	if(num1 === num2){
		alert("This number is palindrome.");
	} else{
		alert("This number is ont a palindrome.")
	}
}

