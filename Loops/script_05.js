//JavaScript Document

"use strict";
/*
Napisz skrypt, który sprawdzi, czy podana liczba jest liczbą pierwszą.
*/

//------------- USER INPUT (eg. prompt) --------------

let input = 11;

//------------- FUNCTIONS ----------------

function checkPrime(input){
	let isPrime = true;
	for(let i=2;i<input;i++){
		if(input%i ===0){
		   isPrime = false;
		   }
	}
	return isPrime;
}

console.log(`${input} ${checkPrime(input)==true?"is":"is not"} prime`);