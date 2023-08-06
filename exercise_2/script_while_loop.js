// JavaScript Document

`use strict`;
/*
const jonas = [
	"Jonas",
	"Shmit",
	2037-1991,
	"teacher",
	["Michael", "Peter", "Steven"]
];


let i=1;
while(i<=10){
	  console.log("loop nr. " + i);
	i++;
	  }

let j = 1;
do{
	console.log("J loop nr. " + j);
	j++;
}while(j<=10);
*/

let dice = Math.trunc(Math.random() * 6) + 1;

while(dice !== 6){
	console.log(`You rolled a ${dice}`);
	dice = Math.trunc(Math.random() * 6) + 1;
	if(dice===6){
		console.log("Loop is about to end...");
	}
}