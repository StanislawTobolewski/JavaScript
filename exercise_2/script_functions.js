//JavaScript
'use strict';

let scoreDolphins = 0;
let scoreKoalas = 0;

function calcAverage(a,b,c){
	return (a+b+c)/3;
}

function checkWinner(a,b){
	let winner = "";
	if(scoreDolphins>(scoreKoalas*2)){
	   winner = "Dolphins win!";
	   }
else if(scoreKoalas>(scoreDolphins*2)){
		winner = "Koalas win!";
	   }
else{
	winner = "No team wins...";
}
	return console.log(winner);
}


scoreDolphins = calcAverage(85,54,41);
scoreKoalas = calcAverage(23,34,27);

checkWinner(scoreDolphins, scoreKoalas);