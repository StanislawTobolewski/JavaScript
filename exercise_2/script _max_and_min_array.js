`use strict`;

let temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];
let secondArray = [0, 1, 2, 3, 4, 5]; //FOR TESTS ONLY
let max = temperatures[0];
let min = temperatures[0];

//FOR TESTS ONLY
const mergeArrays = function (arr1, arr2){
	
	const temp = arr1.concat(arr2);
	return temp;
}


for(let i=0;i<temperatures.length;i++){
	if(typeof temperatures[i] !=="number") {
		console.log("Found an ERROR in input data.");
		continue;
	}
	if(max<temperatures[i]){
		max = temperatures[i];
	}
	if(min>temperatures[i]){
		min = temperatures[i];
	}
}

console.log("Max temp.= " + max);
console.log("Min temp.= " + min);
console.log(`Amplitude is: ${max-min}.`);

//FOR TESTS ONLY
console.log(mergeArrays(temperatures, secondArray));


