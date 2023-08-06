// JavaScript Document

`use strict`


let monthlySavings = 100;
let accountBalance = 0;
const savingTime = 6 //in months

for(let i=0;i<savingTime;i++){
	monthlySavings = monthlySavings + monthlySavings * (0.05/12);
	accountBalance += monthlySavings;
	console.log(monthlySavings);
}

console.log(accountBalance);