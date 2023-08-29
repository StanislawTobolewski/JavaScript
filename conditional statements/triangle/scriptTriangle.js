//JavaScript Document

`use strict`

/*
Twoim zadaniem jest stwierdzić, czy z trzech odcinków o podanych długościach można zbudować trójkąt o dodatnim polu. Pierwszy i jedyny wiersz wejścia zawiera trzy liczby naturalne a,b,c(1≤a, b, c≤1 000 000 000), oddzielone spacjami. Liczby te oznaczają długości trzech odcinków. Twój program powinien wypisać jedno słowo TAK lub NIE, w zależności od tego, czy z odcinków o długościach takich jak na wejściu można zbudować niezdegenerowany trójkąt, czyli trójkąt o dodatnim polu.
Przykład
*/


//---------- USER INPUT (eg. prompt) -------
let a = 4;
let b = 4;
let c = 8;


function Triangle(a,b,c){
	this.a = a;
	this.b = b;
	this.c = c;
}

Triangle.prototype.checkTriangle = function(){
	if((this.a>this.b && this.a>this.c && this.b+this.c>this.a) || (this.b>this.a && this.b>this.c && this.a+this.c>this.b) || (this.c>this.a&&this.c>this.b&&this.a+this.b>this.c)){
		alert("you can build a triangle from these segments.");
	}else{
		alert("you can't build a triangle from these segments.");
	}
}

const triangle01 = new Triangle(a,b,c);

triangle01.checkTriangle();
