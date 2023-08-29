//JavaScript Document

`use strict`

/*
Zrealizuj kalkulator, który dla zadanych liczb w zależności od wartości zmiennej wybor wykonuje: mnożenie, dzielenie, odejmowanie, dodawanie. Użyj instrukcji “switch”.
*/


//---------- USER INPUT (eg. prompt) -------
let a = 4;
let b = 5;
let operand = "/";

function caclNumbers(a,b, operand){
	let result = 0;
	switch(operand){
		case "+":{
			result = a + b;
			break;
		}
		case "-":{
			result = a - b;
			break;
		}
		case "*":{
			result = a * b;
			break;
		}
		case "/":{
			result = a / b;
			break;
		}
		   }
	return result;
}

console.log("Result: ", caclNumbers(a,b,operand));