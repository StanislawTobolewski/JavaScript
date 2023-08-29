//JavaScript Document

"use strict";
/*
Napisz skrypt, który za pomocą znaków * (gwiazdki) narysuje kwadrat. Gwiazdki leżące na obwodzie mają mieć kolor niebieski, a gwiazdki leżące na przekątnych zielone.
*/

//------------- USER INPUT (eg. prompt) --------------

let outDiv = document.getElementById("outputDiv");
let sideLenght = 9;
let outputArray = new Array(sideLenght);
let array = [4][4];

//------------- FUNCTIONS ----------------

for(let i=0;i<sideLenght;i++){
	outputArray[i] = [];
	for(let j=0;j<sideLenght;j++){
		outputArray[i][j] = " * ";
	}
}
console.table(outputArray);