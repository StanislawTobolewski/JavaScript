//JavaScript Document

`use strict`

/*
Za pomocą pętli for wypisz na ekranie dowolne znaki, tak aby układały się w 2 wiersze po 10 znaków.
*/


//---------- USER INPUT (eg. prompt) -------

let myString = "";
const mySign = " x";

//-------------- LOOP ---------------

for(let i=0;i<20;i++){
myString += mySign;
	if(i===9)
{
	myString += "\n";
}
}

console.log(myString);