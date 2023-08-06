`use strict`;

//--------------62. Coding Challenge #1-------------

const DATA1 = [17, 21, 23];
const DATA2 = [12, 5, -5, 0, 4];

const printData = function(array){
	let outputString = "...";
	for(let i=0;i<array.length;i++){
		outputString += ` ${array[i]}C in ${i+1} days ...`;
	}
	return outputString;
}

console.log(printData(DATA1));
console.log(printData(DATA2));