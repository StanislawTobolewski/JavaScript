`use strict`;

const numbersArray = [1,2,3,4,5,6];


const reversArray = function(array){
	let tempArray = [];
	
	for(let i=array.length;i>=0;i--){
		tempArray.push(array[i]);
	}
	return tempArray;
}

console.log(reversArray(numbersArray));