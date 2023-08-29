//JavaScript Document

`use strict`
/*
Za pomocą pętli for, while i do… while napisz skrypt, który będzie zwiększał zmienną i od 1 do 100 o 2, a następnie zmniejszał ją do 1 o 4.
*/

let counter = 1;
let from_1_to_100 = [];
let from_100_to_1 = [];

	do{
		from_1_to_100.push(counter);
		counter+=2;
	   }while(counter<100);

counter = 100;

	for(counter; counter>0;counter-=4){
	  from_100_to_1.push(counter);
	}
	
console.log("Two: ", from_1_to_100);
console.log("Four: ", from_100_to_1);