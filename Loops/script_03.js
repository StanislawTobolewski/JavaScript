//JavaScript Document

`use strict`
/*
Napisz skrypt, który dla zmiennej n=10 i n>0 będzie ją zmniejszał o 1 i wypisywał: wartości kwadratów zmiennej n; następnie wartości kwadratów zmiennej n dla n parzystych.
*/

for(n=10;n>0;n--){
	console.log(Math.pow(n,2));
}

for(n=10;n>0;n--){
	if(n%2){
		console.log("n even: ", Math.pow(n,2));
		}
}