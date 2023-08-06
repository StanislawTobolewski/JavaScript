//JavaScript
'use strict';

//"Class" and objects
// 47. Looping Arrays, Breaking and Continuing

const jonasArray = [
	"Jonas",
	"Shmit",
	2037-1991,
	"teacher",
	["Michael", "Peter", "Steven"]
];

let types = [];

/*for(let i=0;i<jonasArray.length;i++){
	//console.log(jonasArray[i]);
	types.push(typeof jonasArray[i]);
}*/
console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];
const currentYear = 2037;

for(let i=0;i<years.length;i++){
	ages.push(currentYear-years[i]);
}

console.log("Ages = " + ages);

console.log("Only strings");
for(let i=0;i<jonasArray.length;i++){
	if(typeof jonasArray[i] !== "string") continue;
	types.push(typeof jonasArray[i]);
}

console.log(types);

//---------------CLEAR TYPES ARRAY----------------------
types = [];

console.log("-----BREAK WITH NUMBER -----");
for(let i=0;i<jonasArray.length;i++){
	if(typeof jonasArray[i] === "number") break;
	types.push(typeof jonasArray[i]);
}

console.log(types);